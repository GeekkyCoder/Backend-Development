// require this built_in node module from node js by using require function passsing an argument, which is the name of the module in this case it is https
// const http = require('https')

// https has a method for requesting data from a server , which is request method!

// Http.request:
// takes 2 arguments (url|string) and (callBackFn, takes response which is a object)!

// the method send  a request to https://jsonplaceholder.typicode.com/todos/1 , once is data is back from the server it passed to the response object!

// reponse.on has several event like data,end,pause etc...
// response.on: (string,callbackFn) -> takes a string event name and a callbackfn containing the data recieved from server !

const req = http.request(
  "https://jsonplaceholder.typicode.com/todos/1",
  (response) => {
    response.on("data", (data) => {
      // here is the data
      console.log(`data from google: ${data}`);
    });

    // the end event will trigger once there is no more data coming from the server!
    response.on("end", () => {
      console.log("No more data from server!");
    });
  }
);

// the request will not be sent untill request is sent! using req.end()
req.end();

// By using ES6 features and alternative option for getting data from a server we can use http.get instead of request becuase its more obvious that we are only getting the data not sending te data!

//    const {get} =require("https")

//   get("https://jsonplaceholder.typicode.com/todos/1", (response)=> {
//     response.on("data", (data)=> {
//         // here is the data
//       console.log(`data from google: ${data}`)
//     })

//     // the end event will trigger once there is no more data coming from the server!
//     response.on("end", ()=> {
//         console.log("No more data from server!")
//     })
// })

// now by using https.get we dont need to call req.end becuase http.get will handle it itself!
