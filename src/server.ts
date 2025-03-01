const http = require("http");
const server = http.createServer((req, res) => {

  res.setHeader("Content-type", "text/plain");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Teste");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000/");
});
