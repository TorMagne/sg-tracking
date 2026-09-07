import { usersTable } from '~~/server/db/schema';

type CreateUserBody = {
  farmId: number;
  email: string;
  password: string;
  role: string;
};

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);

  if (user.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Admin access required',
    });
  }

  const body = await readBody<CreateUserBody>(event);

  const email = body.email.trim().toLowerCase();
  const hashedPassword = await hashPassword(body.password);

  const [createdUser] = await useDrizzle()
    .insert(usersTable)
    .values({
      farmId: body.farmId,
      email,
      password: hashedPassword,
      role: body.role,
    })
    .returning();

  return {
    id: createdUser?.id,
    farmId: createdUser?.farmId,
    email: createdUser?.email,
    role: createdUser?.role,
    createdAt: createdUser?.createdAt,
  };
});
