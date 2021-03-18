const express = require("express");

const app = express();

const PORT = 3000;

// template engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded());

const pets = [];

// /pets
app.get("/pets", function (req, res) {
  res.render("pets/index", {
    pets: pets,
  });
});

// SQL
app.post("/pets", function (req, res) {
  pets.push(req.body);
  console.log(req.body);
  res.render("pets/index", {
    pets: pets,
  });
});

app.listen(3000, () => {
  console.log("http://localhost:" + PORT);
});
