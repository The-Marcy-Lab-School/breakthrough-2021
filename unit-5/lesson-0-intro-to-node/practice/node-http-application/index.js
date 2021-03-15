const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = parseInt(process.env.PORT, 10) || 8000;

function renderTemplate(res, fileName, data, statusCode = 200) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/html");
  fs.readFile(__dirname + fileName, "utf8", function (err, file) {
    if (err) {
      res.statusCode = 500;
      return res.end("There was an error getting the file");
    }

    let html = file;

    Object.keys(data).forEach((key) => {
      const variable = `{{${key}}}`;
      console.log(variable);
      html = html.replace(variable, data[key]);
    });

    res.end(html);
  });
}

function showPage(res, path) {
  res.setHeader("Content-Type", "text/plain");

  if (path === "/") {
    return renderTemplate(res, "/templates/index.html", {
      name: "Nathan",
      dog: "Milo",
    });
  } else if (path === "/dogs") {
    return res.end("hello dogs");
  } else {
    res.statusCode = 404;
    return res.end("Sorry, that route does not exist.");
  }
}

// Your code here! We've required a few of the libraries you'll need to complete the project.
const server = http.createServer(function (req, res) {
  const path = req.url;
  showPage(res, path);
});

server.listen(PORT);
