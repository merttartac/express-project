const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

//logging the ip of the machine which makes the request by this middleware
friendsRouter.use((req, res, next) => {
    console.log('ip address: %o', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendById);

module.exports = friendsRouter;