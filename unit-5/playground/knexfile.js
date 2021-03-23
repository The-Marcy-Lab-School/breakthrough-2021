// Update with your config settings.

const user = "erwinssaget";

module.exports = {
  development: {
    client: "postgresql",
    connection: `postgresql://erwinssaget@localhost:5432/pets`,
    // connection: {
    //   database: "pets",
    //   user: "erwinssaget",
    //   password: "",
    // },
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
};
