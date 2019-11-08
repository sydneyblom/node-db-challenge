const express = require('express');
const helmet = require('helmet');


const router = require('./projects/projectRouter');

const server = express();

server.use(helmet());
server.use(express.json());//
server.use('/api/projects', router);

module.exports = server;

