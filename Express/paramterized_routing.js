const express = require("express");

const { getFriend, getFriends } = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;

app.get("/friends", getFriends);

//dynamic routing
// we can use this colon for dynamic routing and can get the id with req.params method

// Routes will be like : 👇
// /friends/0
// /friends/1
// /friends/2

app.get("/friends/:friendId", getFriend);

app.listen(PORT);
