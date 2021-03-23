exports.up = function (knex) {
  return knex.schema.alterTable("tasks", function (table) {
    table.string("avatar");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("tasks", function (table) {
    table.dropColumn("avatar");
  });
};
