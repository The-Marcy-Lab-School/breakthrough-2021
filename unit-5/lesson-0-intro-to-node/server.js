const http = require("http");
const fs = require("fs");
const qs = require("querystring");

http
  .createServer(function (req, res) {
    // for working with query strings
    const method = req.method;
    console.log(method);
    const queryData = qs.parse(req.url.split("?")[1]);
    console.log(queryData);

    // Sending plain text
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end('Hello World')

    // Sending html
    // res.writeHead(200, { "Content-Type": "text/html" });
    // const html = fs.readFileSync(__dirname + "/index.html");
    // res.end(html);

    // Templating sync
    res.writeHead(200, { "Content-Type": "text/html" });
    let template = fs.readFileSync(__dirname + "/template.html", "utf8");
    template = template.replace("{person}", queryData.person);
    res.end(template);

    // async
    // res.writeHead(200, { "Content-Type": "text/html" });
    // fs.readFile(__dirname + "/template.html", "utf8", function (err, template) {
    //   const html = template.replace("{person}", queryData.person);
    //   res.end(html);
    // });

    // sending json
    // res.writeHead(200, { "Content-Type": "application/json" });
    // const obj = {
    //   firstName: "Phil",
    //   lastName: "Collins",
    // };
    // const data = JSON.stringify(obj);
    // res.end(data);

    // using streams
    // res.writeHead(200, { "Content-Type": "text/html" });
    // let template = fs.createReadStream(__dirname + "/index.html").pipe(res);
  })
  .listen(3000);
