const mongoose = require('mongoose');
const options =  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
};


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

// saves documents to db
// product details should be an object with the architecture
// of itemSchema
// returns callback invoked with error or result
const save =  function(productDetails, callback) {
    mongoose.connect('mongodb://localhost/productDetails', options)
    .catch(err => callback(err));

    const ProductModel = new Item(productDetails);
    return ProductModel.save()
            .then(res => {
                mongoose.connection.close();
                callback(null, res);
            })
            .catch(err => callback(err))
}

// clear database
// returns callback invoked with error or result obj
const clear = function(callback) {
    mongoose.connect('mongodb://localhost/productDetails', options)
    .then(con => console.log('connected to DB'))
    .catch(err =>  console.error(er));

    return Item.collection.remove()
    .then(res => {
            mongoose.connection.close();
            callback(null, res)
    })
    .catch(err => callback(err));
};

module.exports.db = Item;
module.exports.clear = clear;
module.exports.save = save;
