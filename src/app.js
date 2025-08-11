const express = require('express');
const cors = require('cors');
require('dotenv').config();
const balanzaRouter = require('./controllers/balanza.controller');

const app = express();
app.use(cors());
app.use('/api', balanzaRouter);

module.exports = app;