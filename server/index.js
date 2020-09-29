const express = require('express');
const app = express();
const db = require('../database/index.js');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('client/dist'));

app.get('/product/:id', (req, res) => {
    db.find({id: req.params.id})
    .then((resp) => {
        res.json(resp)
    })
    .catch((err) => {
        res.end(err);
    })
})

const port = 3000;
app.listen(port, () => console.log(`Listening on port:${port}`));
