const express = require('express');


const server = express();

server.use(express.json());


const projectRouter = require('./projects/projectRouter.js');


server.use('/api/projects', projectRouter);


module.exports = server;
