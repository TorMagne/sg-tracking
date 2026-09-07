import { usersTable } from '~~/server/db/schema';

type CreateUserBody = {
  farmId: number;
  email: string;
  password: string;
  role: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateUserBody>(event);

  const email = body.email.trim().toLowerCase();
  const hashedPassword = await hashPassword(body.password);

  const [user] = await useDrizzle()
    .insert(usersTable)
    .values({
      farmId: body.farmId,
      email,
      password: hashedPassword,
      role: body.role,
    })
    .returning();

  return {
    id: user?.id,
    farmId: user?.farmId,
    email: user?.email,
    role: user?.role,
    createdAt: user?.createdAt,
  };
});
