const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {mongo, postgres, cassandra} = require('../database/db-router.js');
const db = cassandra;
app.dbName = db.name;
let isConnected = false;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

app.get('/api/productView/products/:id', (req, res) => {
  if (req.params.id === 'all') {
    db.connect(isConnected)
      .then(() => {
        db.getAll();
        isConnected = true;
      })
      .then((response) => {res.json(response)})
      .catch((err) => {
        console.error(err);
        res.end(400);
      });
  } else {
    db.connect(isConnected)
      .then(() => {
        debugger;
        isConnected = true;
        return db.getOneById(req.params.id);
      })
      .then((resp) => {
        res.json(resp)
      })
      .catch((err) => {
        console.error(err);
        res.send(400);
    })
    .finally(() => {
        res.end();
      });
  }
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  db.connect(isConnected)
  .then(() => {
    isConnected = true;
    return db.getOneById(req.params.id);
  })
  .then((resp) => {
    res.json(resp);
  })
  .catch((err) => {
    console.error(err);
    res.send(400);
  })
  .finally(() => {
    res.end();
    isConnected = false;
  });
});

app.post('/api/productView/addProduct', (req, res) => {
  db.connect(isConnected)
  .then(() => {
    db.addOne(req.body);
    isConnected = true;
  })
  .then(response => {
    res.send(200);
  })
  .catch(err => {
    res.send(400);
  })
  .finally(() => {
    res.end();
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
