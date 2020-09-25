const mongoose = require('mongoose');
const options =  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
};
const ProductData = mongoose.createConnection('mongodb://localhost/product_data', options);


// define document schema
const itemSchema = new mongoose.schema({
    Id: Number,
    Name: String,
    Description: Text,
    Details: {
        materialsCare: [String],
        Sustainability: [String],
        Packaging: {
            Width: Number,
            Height: Number,
            Length: Number,
            Weight: Number,
            Packages: Number,
            ArticleNumber: String,
            Description: String
        }
    },
    imagesUrl: [String],
    options: {
        threadCount: [ Number, String],
        PillowCaseQuantitiy: Number,
        DuvetCoverLength: [Number, String],
        DuvorCoverWidth: {
            size: Number,
            metric: String
        },
        PillowCaseLength:{
            size: Number,
            metric: String
        },
        PillowCaseWidtch: {
            size: Number,
            metric: String
        },
        Colors: [String]
    }
});

// define document model name
const Item = mongoose.model('item', itemSchema);



