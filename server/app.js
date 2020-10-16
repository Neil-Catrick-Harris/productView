const express = require('express');
const app = express();
// const db = require('../database/index.js');
const {mongo, postgres, cassandra} = require('../database/db-router.js');
const db = mongo;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/*', (req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/productView/products/:id', (req, res) => {
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

// app.put();

// app.delete();

module.exports = app;
