import { send } from "./request.mjs";
import { readData } from "./response.mjs";

const makeRequest = (url, data) => {
  let recievedData = send(url, data);
  return readData(recievedData);
};

console.log(makeRequest("https://www.google.com", "hey google"));
