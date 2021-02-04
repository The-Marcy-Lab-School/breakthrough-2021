class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    fullName() {

    }

    communicate() {

    }

    eat() {

    }

    sleep() {
        console.log("I'm sleep")
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, gender, degree) {
        super(firstName, lastName, age, gender)
        this.degree = degree;
    }

    study() {
        console.log("I'm studying")
    }
}

class GraduateStudent extends Student {
    constructor(firstName, lastName, age, gender, degree, graduateDegree) {
        super(firstName, lastName, age, gender, degree)
        this.graddegree = graduateDegree;
    }

    research() {
        console.log("I'm researching")
    }
}

class Fellow extends Person {
    constructor(firstName, lastName, age, gender) {
        super(firstName, lastName, age, gender)
    }
}

const awesomeFunctionality = {
    beAwesome() {
        console.log('awesomeness')
    },
    research() {
        console.log('not researching at all actually')
    },
    growOlder() {
        this.age++;
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