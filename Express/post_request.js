const express = require("express");

const { postFriends } = require("./controllers/friends.controller");


const app = express();

app.use((req, res, next) => {
  next();
});

express.json();

app.post("/friends", postFriends );


app.listen(3000)