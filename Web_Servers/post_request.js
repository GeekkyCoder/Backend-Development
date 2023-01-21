// Posting data to a server:

// POST: post new data to the server

// PUT: updating the existing data on the server by adding new data

// Note: put following code in browser window first to post a new friend using fetch api that is avaiable on window object:

// fetch("https://localhost:3000/friends",{
//     method:"POST",
//     body: JSON.stringify({id:3,name:"Faraz"})
// })

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

  // We can check for the method wheter it is a post or a get request by using "req.method"!

  if (req.method === "POST" && items[1] === "/friends") {
    req.on("data", (data) => {
      // the data we get from sever will be in buffer format, that needs to be converted into string!
      const friend = data.toString();
      // converting data back to javascript object, so we can push it in friends array!
      friends.push(JSON.parse(friend));
    });
  } else if (req.method === "GET" && items[1] === "/friends") {
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
