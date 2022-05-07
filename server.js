const express = require('express');

const friendsRouter = require('./routes/friends.router');

const app = express();
const PORT = 3000;

// Custom logging middleware 
app.use((req, res, next) => {
    const start = Date.now();
    next();
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} - ${req.baseUrl}${req.url} - ${delta}ms `)
});

app.use(express.json());

app.use('/friends', friendsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});