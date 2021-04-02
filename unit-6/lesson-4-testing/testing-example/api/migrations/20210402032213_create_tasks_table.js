
exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id')
    table.string('task_name')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
};
