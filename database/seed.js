const faker = require('faker');
const db = require('./index.js');

let packaging = {
    shortDesc: faker.lorem.words(),
    measurments: {
        width: Math.floor(Math.random() * 15),
        height: Math.floor(Math.random() * 25),
        length: Math.floor(Math.random() * 5),
        weight: Math.floor(Math.random() * 25),
        packages: Math.floor(Math.random() * 3),
    }
};
let sizes = {
    attributes: faker.lorem.sentence(),
    measurments: (function() {
        let list =[];
        let count = Math.floor(Math.random() * 6);
        for (let i = 0; i < count; i++) {
            list.push(Math.floor(Math.random() * 10));
        }
        
        return list;
    })()
};

let images = (function() {
    let imagesArr = [];
    let count = Math.floor(Math.random() * 15);

    for (i = 0; i < count; i++) {
        let imageUrl = faker.image.fashion();
        imagesArr.push(imageUrl);
    }

    return imagesArr;
});

const seedDb = function() {
    let dataArray = [];
    for (let i = 1; i <= 100; i++) {
        let productDetails = {
            name: faker.commerce.productName(),
            id: i,
            description: faker.commerce.productDescription(),
            articleNumber: faker.internet.ip().toString(),
            details: faker.lorem.sentence(),
            materials: faker.lorem.sentence(),
            sustainibility: faker.lorem.sentence(),
            packaging: packaging,
            sizes: sizes,
            imagesUrls: images()
        };
        dataArray.push(productDetails);
    };

    db.create(dataArray)
        .then( (data) => {
            console.log(`${data.length} records succesfully inserted.`);
            db.db.close( () => console.log('Connection closed'));
        })
        .catch( (err) => {
            console.error(err);
        })
};
seedDb();
