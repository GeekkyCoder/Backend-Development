const express = require('express')

const {getFriends} = require("../controllers/friends.controller")

const friendsRouter = express.Router()

friendsRouter.get('/', getFriends )

module.exports = {
    friendsRouter
}
