const express = require('express');

const userRoutes = require('./users/userRouter');
const postRoutes = require('./posts/postRouter');


const server = express();

server.get('/', (req, res) => {
    res.send('Hello World')
});

server.use('/users', userRoutes);
server.use('/posts', postRoutes);


module.exports = server;