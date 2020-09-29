const express = require('express');
const app = express();
const db = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/product/:id', (req, res) => {
    db.Model.find({id: req.params.id})
    .then((resp) => {
        res.json(resp)
    })
    .catch((err) => {
        res.end(err);
    })
})

const port = 3000;
app.listen(port, () => console.log(`Listening on port:${port}`));
