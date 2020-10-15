const faker = require('faker');
const {mongo, postgres, cassandra} = require('./db-router.js');
const db = mongo;

let packaging = () => {
    let details = {
        shortDesc: faker.lorem.sentence(),
        measurments: {
            width: Math.floor(Math.random() * 15 + 6),
            height: Math.floor(Math.random() * 25 + 10),
            length: Math.floor(Math.random() * 11 + 4),
            weight: Math.floor(Math.random() * 25 + 13),
            packages: Math.floor(Math.random() * 3 + 1),
        }
    };
    return details;
};

let sizes = () => {
    let details = {
        fitting: faker.lorem.words() + ` (${faker.lorem.words()})`,
        attributes: {
            "thread-count": Math.floor(Math.random() * 300 + 100),
            "Pillowcase quantity": Math.floor(Math.random() * 4 + 2),
            "Duvet cover length": Math.floor(Math.random() * 4 + 2),
            "Duvet cover width": Math.floor(Math.random() * 4 + 2),
            "Pillowcase length": Math.floor(Math.random() * 4 + 2),
            "Pillowcase width": Math.floor(Math.random() * 4 + 2)
        }
    };
    return  details;
};

let images = (function() {
    let imagesArr = [];
    let count = Math.floor(Math.random() * 15 + 6);
    let links = [
        "http://placeimg.com/640/480/fashion",
        "http://placeimg.com/640/480/abstract",
        "http://placeimg.com/640/480/animals",
        "http://placeimg.com/640/480/business",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/city",
        "http://placeimg.com/640/480/food",
        "http://placeimg.com/640/480/nightlife",
        "http://placeimg.com/640/480/fashion",
        "http://placeimg.com/640/480/nature",
        "http://placeimg.com/640/480/fashion",
        "http://placeimg.com/640/480/abstract",
        "http://placeimg.com/640/480/animals",
        "http://placeimg.com/640/480/business",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/city",
        "http://placeimg.com/640/480/food",
        "http://placeimg.com/640/480/nightlife",
        "http://placeimg.com/640/480/fashion",
        "http://placeimg.com/640/480/nature"
    ];
    for (i = 0; i < count; i++) {
        imagesArr.push(links[i]);
    }

    return imagesArr;
});

const seedDb = function() {
    let dataArray = [];
    const startTime = new Date();
    const numRecords = 1 * 10**5;
    for (let i = 1; i <= numRecords; i++) {
        let productDetails = {
            name: faker.commerce.productName(),
            id: i,
            description: faker.commerce.productDescription(),
            articleNumber: faker.internet.ip().toString(),
            details: faker.lorem.sentence(),
            materials: faker.lorem.sentence(),
            sustainibility: faker.lorem.sentence(),
            packaging: packaging(),
            sizes: sizes(),

<<<<<<< HEAD
=======

>>>>>>> 49b667b... db-router functional with mongoose actions
            imageUrls: images()
        };
        dataArray.push(productDetails);
    };

    db.addMany(dataArray)
        .then( (data) => {
<<<<<<< HEAD
            console.log(`${data.length} records succesfully inserted in ${new Date() - startTime} ms`);
=======
            console.log(`${data.length} records succesfully inserted.`);
>>>>>>> 49b667b... db-router functional with mongoose actions
            db.disconnect().then(() => console.log('Connection closed'));
        })
        .catch( (err) => {
            console.error(err);
        })
};
db.connect()
<<<<<<< HEAD
    .then(() => db.deleteAll())
    .then(() => console.log('All records deleted from db'))
=======
>>>>>>> 49b667b... db-router functional with mongoose actions
    .then(() => {
        console.log('connected to db');
        seedDb();
    });
