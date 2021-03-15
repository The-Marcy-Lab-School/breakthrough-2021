// const state = require("./state");
// const Person = require("./Person");
// const add = require("./math");
const fs = require("fs");

// let person1 = new Person(state.name);

// console.log(person1);

// console.log(add(1, 2));

// const data = fs.readFileSync("greeting.txt", "utf8");
console.log(__dirname);
fs.readFile(__dirname + "/index.html", "utf8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
