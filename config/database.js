module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'pg-5be135e-shravanrawas8-c7d2.i.aivencloud.com'),
      port: env.int('DATABASE_PORT', 24000),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'avnadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_Ujnf037pA0F6I3XYIhM'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
