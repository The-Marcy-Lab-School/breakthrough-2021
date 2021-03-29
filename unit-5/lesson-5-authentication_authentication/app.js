const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const bcrypt = require("bcrypt");
const api = require("./api");
const users = require("./users");

// used purely for generating an id
const { randomBytes } = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "verysecretsecret",
    name: "sessionId",
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // simulate db call
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.render("login", {
      message: "No user found with that email",
    });
  }

  let match;

  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.render("login", {
      message: err.message,
    });
  }

  if (!match) {
    return res.render("login", {
      message: "Invalid Credentials",
    });
  }

  req.session.user = user;

  res.redirect("/home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let hashedPassword;
  try {
    const saltRounds = 10;
    hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (err) {
    return res.status(500).render("error", { error: err });
  }

  const user = {
    id: randomBytes(4).toString("hex"),
    email,
    name,
    password: hashedPassword,
  };

  console.log(user);

  // simulate saving to db
  users.push(user);

  req.session.user = user;

  res.redirect("/home");
});

app.get("/home", (req, res) => {
  if (!req.session.user) {
    return res.status(401).redirect("/login");
  }

  return res.render("home", {
    user: req.session.user,
  });
});

app.get("/logout", (req, res) => {
  req.session.destroy();

  res.redirect("/");
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
