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
    if (req.params.id === 'all') {
        db.find()
            .then((response) => {res.json(response)})
            .catch((err) => {
                console.error(err);
                res.end(400);
            });
    } else {
        db.find({id: req.params.id})
            .then((resp) => {
                res.json(resp)
            })
            .catch((err) => {
                console.error(err);
                res.end();
            });
    }
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

app.put('/api/productView/editProductById/:id', (req, res) => {
    let productInfo = req.body;
    let filter = { id: req.params.id };
    // find product if exists--get mongoose _id
    db.findOneAndUpdate(filter, productInfo, { new: true })
      .then(result => {
        res.json(result);
      })
      .catch(err => res.send(400));
});

app.delete('/api/productView/deleteProductById/:id', (req, res) => {
    db.deleteOne({ id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.send(400));
});

module.exports = app;
