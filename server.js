const friendsController = require('./controllers/friends.controller');

const express = require('express');
const app = express();
const PORT = 3000;

// Custom logging middleware 
app.use((req, res, next) => {
    const start = Date.now();
    next();
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} - ${req.url} - ${delta}ms `)
});

app.use(express.json());


app.post('/friends', friendsController.postFriend)
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriendById);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});