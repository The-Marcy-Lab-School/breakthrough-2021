const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer(function (request, response) {
  if (request.url === "/pets") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });

    const pets = JSON.stringify({
      pets: ["dog", "cat"],
    });
    response.end(pets);
  } else {
    const url = request.url;
    const query = url.split("?");

    const data = qs.parse(query[1]);
    console.log(data);

    response.writeHead(200, {
      "Content-Type": "text/html",
    });

    fs.readFile(__dirname + "/template.html", "utf8", (err, html) => {
      const file = html.replace("{person}", data.person);

      response.end(file);
    });
  }
});

server.listen(3000);
