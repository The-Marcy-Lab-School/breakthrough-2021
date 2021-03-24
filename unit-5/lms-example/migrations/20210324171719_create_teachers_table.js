
exports.up = function (knex) {
  return knex.schema.createTable('teachers', function (table) {
    table.increments('id')
    table.string('name')
    table.boolean('is_cool')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('teachers')
};
