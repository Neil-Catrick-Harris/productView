const express = require('express');
const app = express();
const db = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/*', (req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/productView/products/:id', (req, res) => {
    db.find({id: req.params.id})
    .then((resp) => {
        res.json(resp)
    })
    .catch((err) => {
        console.error(err);
        res.end();
    })
});

app.post('/api/productView/addProduct', (req, res) => {
    db.create(req.body)
      .then(response => {
          res.send(200);
      })
      .catch(err => {
          res.send(400);
      });
});

// app.put();

// app.delete();

module.exports = app;
