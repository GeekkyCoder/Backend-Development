const { createServer } = require("http");

const requestListener = (req, res) => {
  const { url } = req;
  if (url === "/") res.write("<h1>home page</h1>");
  if (url === "/messages") res.write("<h1>messeages page</h1>");
  if (url === "/friends") res.write("<h1>friends page</h1>");
  if (url === "/friends/friend") res.write("<h1>Faraz is my friend</h1>");
  if (url === "/items") res.write("<h1>items page</h1>");
};

const server = createServer(requestListener);

server.listen(3000, "localhost", () => {
  console.log("listenin on localhost:3000");
});
