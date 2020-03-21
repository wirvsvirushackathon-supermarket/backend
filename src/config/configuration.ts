export default () => ({
  database: {
    host: process.env.DATABASE_HOST || 'pg',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '1234',
    database: process.env.DATABASE_DATABASE || 'supermarket',
  },
});
