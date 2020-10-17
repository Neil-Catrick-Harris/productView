const express = require('express');
const path = require('path');
const app = express();
<<<<<<< HEAD
const cors = require('cors');
=======
>>>>>>> 1591f765e635b0a2f4fa4d1ff1d6eb602e5d3ba9
// const db = require('../database/index.js');
const {mongo, postgres, cassandra} = require('../database/db-router.js');
const db = mongo;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

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

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  db.connect()
  .then(() => db.getOne(req.params.id))
  .then((resp) => {
    res.json(resp);
  })
  .catch((err) => {
    console.error(err);
    res.send(400);
  })
  .finally(() => {
    res.end();
    db.disconnect();
  });
});

app.post('/api/productView/addProduct', (req, res) => {
  db.connect()
  .then(() => db.addOne(req.body))
  .then(response => {
    res.send(200);
  })
  .catch(err => {
    res.send(400);
  })
  .finally(() => {
    res.end();
    db.disconnect();
  })
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
