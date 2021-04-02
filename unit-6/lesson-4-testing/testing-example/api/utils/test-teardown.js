module.exports = async () => {
  await __knex__.migrate.rollback();
  await __knex__.destroy()
}
