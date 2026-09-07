import { eq } from 'drizzle-orm';
import { usersTable } from '~~/server/db/schema';

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);

  if (user.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Admin access required',
    });
  }

  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required',
    });
  }

  const [foundUser] = await useDrizzle()
    .select({
      id: usersTable.id,
      farmId: usersTable.farmId,
      email: usersTable.email,
      role: usersTable.role,
      createdAt: usersTable.createdAt,
    })
    .from(usersTable)
    .where(eq(usersTable.id, Number(id)));

  if (!foundUser) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found',
    });
  }

  return foundUser;
});
