const knex = require('../knex');

module.exports = async () => {
  global.__knex__ = knex;

  await global.__knex__.migrate.latest();
}
