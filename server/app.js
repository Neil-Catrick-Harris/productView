//const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {mongo, postgres, cassandra} = require('../database/db-router.js');
const axios = require('axios');
app.dbName = 'Cassandra';
const dbIP = `54.151.15.44`;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

app.get('/api/*', (req, res) => {
  res.redirect(`http://${dbIP}:3002${req.url}`);
});

app.get('/loaderio-1ffce587c4169230698ec4c56e818db5/', (req, res) => {
  res.send('loaderio-1ffce587c4169230698ec4c56e818db5');
});

app.get('/:id', (req, res) => {
  if (req.params.id === 'favicon.ico') {
    res.sendStatus(200);
  } else {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  }
});

app.post('/api/*', (req, res) => {
  axios.post(`http://${dbIP}:3002${req.url}`, req.body)
    .then(result => res.send(result.data))
    .catch(err => res.sendStatus(400));
});

module.exports = app;
