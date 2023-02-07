const express = require("express");
const path = require("path");


const { friendsRouter } = require("./routes/friends.router");
const { messagesRouter } = require("./routes/messages.router");

const app = express();

const PORT = 3000;


app.use("/site", express.static(path.join(__dirname,"public")))

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
