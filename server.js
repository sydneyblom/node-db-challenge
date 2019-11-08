const express = require('express');
const helmet = require('helmet');


const router = require('./router.js');

const server = express();

server.use(helmet());
server.use(express.json());//
server.use('/', router);

module.exports = server;

