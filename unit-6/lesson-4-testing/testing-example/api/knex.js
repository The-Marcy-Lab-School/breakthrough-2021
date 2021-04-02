const knex = require("knex");
const knexConfig = require("./knexfile");

const env = process.env.NODE_ENV || "development";

module.exports = knex({
  client: knexConfig[env].client,
  connection: knexConfig[env].connection,
});
