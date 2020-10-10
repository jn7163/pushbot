export const config = {
  isDev: process.env.NODE_ENV === 'development',
  description: 'A simple push service built on Telegram',
  webPort: Number(process.env.PORT) || 8080,

  // START developer should customize
  PUSHBOT_TOKEN: process.env.PUSHBOT_TOKEN!,
  PUSHTESTBOT_TOKEN: process.env.PUSHTESTBOT_TOKEN!,
  baseUrl: 'https://push.alsotang.com',
  SECRET_PATH: process.env.PUSHBOT_SECRET_PATH!,
  CONNECTION_STRING: process.env.DATABASE_URL! || process.env.PUSHBOT_DATABASE_URL,
  // END developer should customize
}