const http = require("http");

const host = "localhost";
const port = 8000;

// request listener which needs to be passed to create server
const requestListener = function (req, res) {
  // req: is a readbale stream
  // res. is a write stream, we can use any format to pass data back to client
  // sending the data back to the client

  // passing an plain text
  // res.end("My first server!");

  // incase if we are sendind json data to client we need to explicitly set the content type to be json format
  res.writeHead(200, {
    "Content-Type": "aplication/json",
  });
  // passing a stringified object
  res.end(
    JSON.stringify({
      id: 1,
      name: "faraz",
    })
  );
};

// creating a server
const server = http.createServer(requestListener);

//listening to the server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});


// output: {"id":"1", "name":"faraz"}