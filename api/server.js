const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const dataRouter = require('./data-router');

server.use(helmet());
server.use(cors());

server.use('/', dataRouter);

server.get('/', (_, res) => {
  res.json({ api: 'api running' });
});

module.exports = server;
