const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Enistein",
  },
  {
    id: 1,
    name: "Nicola Tesla",
  },
  {
    id: 2,
    name: "Elon Musk",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (items[1] === "/friends") {
    res.writeHead({
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(friends));
  }
  if (items.length === 3) {
    const friendIndex = Number(items[2]);
    res.end(JSON.stringify(friends[friendIndex]));
  } else {
    res.end(JSON.stringify(friends));
  }
});

server.listen(PORT, () => {
  console.log(`listening to port localhost:3000`);
});
