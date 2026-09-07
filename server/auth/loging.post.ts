import { eq } from 'drizzle-orm';
import { usersTable } from '~~/server/db/schema';

type LoginBody = {
  email: string;
  password: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<LoginBody>(event);

  const email = body.email.trim().toLowerCase();

  const [user] = await useDrizzle().select().from(usersTable).where(eq(usersTable.email, email));

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password',
    });
  }

  const validPassword = await verifyPassword(user.password, body.password);

  if (!validPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password',
    });
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });

  return {
    id: user.id,
    email: user.email,
    role: user.role,
  };
});
