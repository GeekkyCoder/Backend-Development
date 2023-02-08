const express = require("express");
const path = require("path");


const { friendsRouter } = require("./routes/friends.router");
const { messagesRouter } = require("./routes/messages.router");

const app = express();

const PORT = 3000;


app.set("view engine","hbs")
app.set("views",path.join(__dirname,"views"))

app.get("/", (req,res) => {
  res.render("index", {
    title:"My friends are very clever",
    caption:"Pakistan is beatutiful"
  })
})

app.use("/site", express.static(path.join(__dirname,"public")))


app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
