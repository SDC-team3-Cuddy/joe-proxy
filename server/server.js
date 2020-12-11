const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.get('/loaderio-cffe03d6c632a21f548200021daa59a2', function(req, res){
  res.sendFile(__dirname + '/loaderio-cffe03d6c632a21f548200021daa59a2.txt');
});

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

module.exports = app;
