const express = require("express");
const { on } = require("nodemon");

const app = express();

// Middleware ? 🤔

// 1)Express app receives a request when someone hits a server for which it will create
// request and response.
// 2)middleware is used to manipulate request.
// 3)It is middleware because it is a function that run between request and response cycle.
// 4) middleware stack. middleware that appear first will run first.
// 5)middleware is like pipeline which end with response object.

// next() ? 🤔
// its the thrid paramter in middleware function, that calls the next middleware and so on, if we dont call the next() function , the server will be halted and sends a bad response to us

// try commenting out next() function and see 👇

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/messages", (req, res) => {
  res.send("messages here");
});

app.get("/friend", (req, res) => {
  res.send({
    id: 1,
    name: "faraz",
  });
});

app.listen(3000);
