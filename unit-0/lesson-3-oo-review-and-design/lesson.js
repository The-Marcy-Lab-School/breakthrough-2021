// using constructor functions
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.communicate = function () {
}
Person.prototype.eat = function () {
}
Person.prototype.sleep = function () {
  console.log("I'm sleep")
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender)

  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.study = function () {
  console.log("I'm studying")
}

Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
})

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree)

  this.graddegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype)

Object.defineProperty(GraduateStudent.prototype, 'constructor', {
  value: GraduateStudent,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
})

GraduateStudent.prototype.research = function() {
  console.log("I'm researching")
}

function Fellow(firstName, lastName, age, gender) {
  Person.call(this, firstName, lastName, age, gender)
}

Fellow.prototype = Object.create(Person.prototype)

Object.defineProperty(Fellow.prototype, 'constructor', {
  value: Fellow,
  enumerable: false,
  writable: true
})

const awesomeFunctionality = {
  growOlder() {
      this.age++;
  },
  growSmarter() {
    console.log(`growing smarter`)
  },
  beingAwesome() {
    console.log(`I'm sooooo awesome.`)
  }
}

Object.assign(GraduateStudent.prototype, awesomeFunctionality)
Object.assign(Fellow.prototype, awesomeFunctionality)

const jendri = new GraduateStudent('jendri', 'morocho', 25, 'male', 'math', 'cs')
const rosemary = new Fellow('Rosemary', 'dont know', 20, 'female')
const student = new Student('example', 'example', 20, 'n/a', 'philosophy')

console.log(jendri)
console.log(rosemary)
console.log(student)