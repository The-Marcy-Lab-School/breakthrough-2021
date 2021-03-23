exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (table) {
    table.increments("task_id");
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tasks");
};
