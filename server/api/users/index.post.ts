export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const hashedPassword = await hashPassword(body.password);

  const [user] = await useDrizzle;
});
