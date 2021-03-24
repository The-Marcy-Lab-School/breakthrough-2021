
exports.up = function (knex) {
  return knex.schema.createTable('course_student', function (table) {
    table.primary(['course_id', 'student_id'])
    table.string('name')
    table.integer('course_id')
    table.integer('student_id')
    table.integer('course_grade')

    table.foreign('course_id').references('courses.id')
    table.foreign('student_id').references('students.id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('course_student')
};
