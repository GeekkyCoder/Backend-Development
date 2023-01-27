const express = require("express")

const app = express()

const PORT = 3000

app.get("/", (req,res)=> {
  res.send("Hello")
})

app.get("/messages", (req,res)=> {
    res.send("Messages")
  })

  app.get("/friends", (req,res)=> {
    res.send({
        id: 1,
        name : "Albert Einstein"
    })
  })

app.listen(PORT, ()=> {
    console.log(`listening on localhost:${PORT}`)
})