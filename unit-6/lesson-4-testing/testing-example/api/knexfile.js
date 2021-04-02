// Update with your config settings.

module.exports = {
  test: {
    client: "postgresql",
    connection: {
      database: "test_tasks",
      user: "erwinssaget",
      password: "",
    },
  },

  development: {
    client: "postgresql",
    connection: {
      database: "tasks",
      user: "erwinssaget",
      password: "",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
