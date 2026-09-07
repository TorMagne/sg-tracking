import { usersTable } from '~~/server/db/schema';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const hashedPassword = await hashPassword(body.password);

  const [user] = await useDrizzle()
    .insert(usersTable)
    .values({
      farmId: body.farmid,
      email: body.email,
      passwordHash: hashedPassword,
      role: body.role,
    })
    .returning();

  return user;
});
