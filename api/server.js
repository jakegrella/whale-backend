const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// add router imports here

server.use(helmet());
server.use(cors());

// add router uses here

server.get('/', (_, res) => {
  res.json({ api: 'api running' });
});

module.exports = server;
