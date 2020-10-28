const newRelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {mongo, postgres, cassandra} = require('../database/db-router.js');
const db = cassandra;
app.dbName = db.name;
db.connect();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/api/productView/products/:id', (req, res) => {
  db.getOneById(req.params.id)
    .then(result => res.json([result]))
    .catch(err => {
      console.error(err);
      res.sendStatus(400);
  });
});

app.get('/api/productView/products', (req, res) => {
  db.getAll()
    .then(result => res.json([result]))
    .catch(err => {
      console.error(err);
      res.end(400);
    });
});

app.get('/loaderio-1ffce587c4169230698ec4c56e818db5/', (req, res) => {
  // loader.io verification on 10/27
  res.send('loaderio-1ffce587c4169230698ec4c56e818db5');
});

app.post('/api/productView/products', (req, res) => {
  db.addOne(req.body)
    .then(result => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      res.sendStatus(400)
    });
});

app.put('/api/productView/products/:id', (req, res) => {
  db.updateOne(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.sendStatus(400));
});

app.delete('/api/productView/products/:id', (req, res) => {
  db.deleteOne({ id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.sendStatus(400));
});

module.exports = app;
