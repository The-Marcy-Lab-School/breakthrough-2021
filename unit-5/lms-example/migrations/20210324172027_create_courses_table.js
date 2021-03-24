
exports.up = function (knex) {
  return knex.schema.createTable('courses', function (table) {
    table.increments('id')
    table.string('name')
    table.integer('teacher_id')
    table.integer('class_size')

    table.foreign('teacher_id').references('teachers.id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('courses')
};
