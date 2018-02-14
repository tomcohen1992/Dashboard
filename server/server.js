'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const data = require('./data.json');


const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/../src')));

app.use('/data', (req, res) => {
    res.json(data);
});

const port = 3000;
app.listen(port, function () {
    console.log('app listening on port: ' + port);
});

module.exports = app;
