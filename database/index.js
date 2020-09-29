const mongoose = require('mongoose');
const options =  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
};

mongoose.connect('mongodb://localhost/productDetails', options);

const ItemSchema = mongoose.Schema({
    name: String,
    id: Number,
    description: String,
    articleNumber: String,
    details: String,
    materials: String,
    sustainibility: String,
    packaging: {
        shortDesc: String,
        measurments: {
            width: Number,
            height: Number,
            length: Number,
            wieght: Number,
            packages: Number
        }
    },
    sizes: {
        attributes: String,
        measurments: [Number]
    },
    imageUrls: [String]
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
