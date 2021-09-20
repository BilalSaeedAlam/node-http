const http = require("http");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

http
  .get("http://jsonplaceholder.typicode.com/users", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
