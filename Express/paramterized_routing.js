const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Mr.X",
  },
  {
    id: 1,
    name: "MR.Y",
  },
  {
    id: 2,
    name: "MR.Z",
  },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

//dynamic routing
// we can use this colon for dynamic routing and can get the id with req.params method

// Routes will be like : 👇
// /friends/0
// /friends/1
// /friends/2

app.get("/friends/:friendId", (req, res) => {
  // return the id as string
  const friendId = req.params.friendId;
  // string 👇
  //    console.log(typeof(friendId))

  // we need to convert it into a number so we can pass it as a index to our array of friends
  const friend = friends[Number(friendId)];

  // if there is  no route match for example: /friends/22, there is no friend 22 exist, so we have to manually send a 404 error page we can do it by checking the friend if the friend exist, show the frirnd object as json type else show the 404 page!

  if (friend) {
    res.send(friend);
  } else {
    res.status(404).send({
      error: "friend does not exist",
    });
  }
});

app.listen(PORT);
