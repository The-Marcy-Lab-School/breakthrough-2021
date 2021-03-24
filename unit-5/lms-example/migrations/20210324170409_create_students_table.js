
exports.up = function (knex) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id')
    table.string('email')
    table.string('full_name')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('students')
};
