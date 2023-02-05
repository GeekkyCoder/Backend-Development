const model = require("../models/friends.model")


function postFriends(req, res) {
    if (!req.body.name) {
      return {
        error: "missing friend name",
      };
    }
    const newFriend = {
      id: friends.length,
      name: req.body.name,
    };
  
    model.push(newFriend);
  
    res.json(model);
  }


  function getFriend(req, res){
    // return the id as string
    const friendId = req.params.friendId;
    // string 👇
    //    console.log(typeof(friendId))
  
    // we need to convert it into a number so we can pass it as a index to our array of friends
    const friend = model[Number(friendId)];
  
    // if there is  no route match for example: /friends/22, there is no friend 22 exist, so we have to manually send a 404 error page we can do it by checking the friend if the friend exist, show the frirnd object as json type else show the 404 page!
  
    if (friend) {
      res.send(friend);
    } else {
      res.status(404).send({
        error: "friend does not exist",
      });
    }
  }

  function getFriends(req,res){
     res.send(model)
  }


  module.exports = {
    postFriends,
    getFriend,
    getFriends
  }