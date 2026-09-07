import { usersTable } from '~~/server/db/schema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const hashedPassword = await hashPassword(body.password);

  const [user] = await useDrizzle()
    .insert(usersTable)
    .values({
      farmId: body.farmId,
      email: body.email,
      password: hashedPassword,
      role: body.role,
    })
    .returning();

  return user;
});
