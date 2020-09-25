const faker = require('faker');
const connection = require('./index.js');

// define object placeholders for future use
// uses faker.js to generate randomized information
let name = faker.commerce.productName();
let id;
let description = faker.commerce.productDescription();
let articleNumber = faker.internet.ip().toString();
let details = faker.lorem.sentence();
let materials = faker.lorem.sentence();
let sustainibility = faker.lorem.sentence();
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

// TODO: currently generates random links from faker.js
// need to pull links from AWS S3
let images = (function() {
    let imagesArr = [];
    let count = Math.floor(Math.random() * 15);
    for (i = 0; i < count; i++) {
        let imageUrl = faker.image.fashion();
        imagesArr.push(imageUrl);
        
    }
    return imagesArr;
});

// seed database with 100 records
// use deifned placeholder objects to geenerate sample data
// TODO: Seed links from AWS file instead of generic links
const seedDb = function() {
    let failCount = 0;
    for (let i = 1; i <= 100; i++) {
        id = i;
        let productDetails = {
            name: name,
            id: id,
            description: description,
            articleNumber: articleNumber,
            details: details,
            materials: materials,
            sustainibility: sustainibility,
            packaging: packaging,
            sizes: sizes,
            imagesUrls: images()
        };
        connection.save(productDetails, (err, res) => {
            if (err) {
                failCount++;
                console.log(`error on seed ${i}`);
            } else {
                if (i === 100) {
                    console.log(`Seeding complete. ${100 - failCount} succesfully seeded.`);
                }
            }
        });
    };
};
seedDb();