// require express
const { response } = require("express");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", function (request, response) {
  console.log(request.query);
  response.send(request.query);
});

// /person/2
app.get("/person/:personId", function (request, response) {
  console.log(request.params);
  response.send("Hello Person");
});

// pets/[nameOfPet]
app.get(
  "/pets/:petId/photos/:photoId?/meta/:metaId",
  function (request, response) {
    console.log(request);
    response.send(request.params);
  }
);

app.listen(PORT, () => {
  console.log(`started on http://localhost:${PORT}`);
});
