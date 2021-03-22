const express = require("express");
const pgPromise = require("pg-promise")();

const user = "erwinssaget";
const db = pgPromise(`postgresql://${user}@localhost:5432/pets`);
const app = express();

const PORT = 3000;

// template engine
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded());

// /pets
app.get("/pets", async function (req, res) {
  try {
    const data = await db.any("SELECT * from pets");
    res.render("pets/index", {
      pets: data,
    });
  } catch (err) {
    console.log(err);
    res.send("error occured");
  }
});

app.post("/pets", async function (req, res) {
  console.log(req.body);
  try {
    const data = await db.none("INSERT INTO PETS (name, age) VALUES ($1, $2)", [
      req.body.name,
      req.body.age,
    ]);
    res.render("pets/index", {
      pets: data,
    });
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:" + PORT);
});
