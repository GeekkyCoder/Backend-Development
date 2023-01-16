const { send, encryptData } = require("./request");
const { readData } = require("./response");

const makeRequest = (url, data) => {
  let recievedData = send(url, data);
  return readData(recievedData);
};

console.log(makeRequest("https://www.google.com", "hey google"));
