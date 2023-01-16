const axios = require("axios");

const getData = async () => {
  try {
    const resp = await axios.get("https://www.google.com");
    const data = await resp;
    console.log(data);
  } catch (err) {
    console.log(`error: ${err}`);
  } finally {
    console.log("i will run always");
  }
};

getData();
console.log("hello");
