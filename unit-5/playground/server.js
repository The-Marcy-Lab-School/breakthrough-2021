// require express
const express = require("express");
const cors = require("./cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
console.log(cors);
app.use(cors({ url: "/" }));

app.set("views", "./views");
app.set("view engine", "ejs");

const checkHeaders = function (request, response, next) {
  console.log("running first middleware");
  const authorization = !!request.header("Authorization");
  // if (authorization) {
  return next();
  // }

  // return response.send("not authorized");
};

// GLOBAL MIDDLEWARE
app.use((req, res, next) => {
  console.log(`2`);
  next();
});

// ROUTE DEFINITIONS

app.get("/", function (request, response) {
  // response.sendFile(__dirname + "/public/index.html");
  response.render("index");
});

app.use((req, res, next) => {
  // throw new Error("waaaaahhhh");
  console.log(`1`);
  next();
});

app.get("/contact-us", function (request, response) {
  response.sendFile(__dirname + "/public/contact.html");
});

// add /about route
app.get(
  "/about",
  function (req, res, next) {
    console.log("im running only in about");
    next();
  },
  function (req, res) {
    const data = req.query;

    res.render("about", {
      link: data.link,
      people: ["one", "two", "three"],
    });
  }
);

// /person/2
app.get("/person/:personId", function (request, response) {
  console.log(request.params);
  response.send("Hello Person");
});

app.get(
  "/pets/:petId/photos/:photoId?/meta/:metaId",
  function (request, response) {
    console.log(request);
    response.send(request.params);
  }
);

app.use((req, res, next) => {
  console.log("route not found");
  console.log("---------------------");
  res.statusCode = "404";
  res.send("route not found");
});

app.use((err, req, res, next) => {
  console.log(err.message);

  res.status(500);
  res.send("something went wrong");
});

app.listen(PORT, () => {
  console.log(`started on http://localhost:${PORT}`);
});
