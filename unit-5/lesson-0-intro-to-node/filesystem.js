const fs = require("fs");

const greet = fs.readFileSync(__dirname + "/greeting.txt", "utf8");

const greet2 = fs.readFile(
  __dirname + "/greeting.txt",
  "utf8",
  function (err, data) {
    console.log(data);
  }
);

console.log(greet);
console.log("done");
