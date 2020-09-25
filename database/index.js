const mongoose = require('mongoose');
const options =  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
};
const ProductData = mongoose.createConnection('mongodb://localhost/product_data', options);


