const express = require('express')

const {getFriends,postFriends} = require("../controllers/friends.controller")

const friendsRouter = express.Router()

friendsRouter.get('/', getFriends )
friendsRouter.post("/", postFriends)

module.exports = {
    friendsRouter
}
