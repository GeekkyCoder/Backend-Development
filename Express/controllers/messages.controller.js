const path = require("path")

function getMessages(req, res) {
  // res.send("<ul><li>Messages</li></ul>");
  console.log(path)
  res.sendFile(path.join(__dirname,"..","public","nature.jpg"))
}

module.exports = {
  getMessages,
};
