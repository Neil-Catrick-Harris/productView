const faker = require('faker');
const db = require('./index.js');

let getPackaging = () => {
    return {
        shortDesc: faker.lorem.sentence(),
        measurments: {
            width: Math.floor(Math.random() * 15 + 6),
            height: Math.floor(Math.random() * 25 + 10),
            length: Math.floor(Math.random() * 11 + 4),
            weight: Math.floor(Math.random() * 25 + 13),
            packages: Math.floor(Math.random() * 3 + 1),
        }
    }
};

let getSizes = () => {
    return {
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
};

let getImages = () => {
    let imagesArr = [];
    let count = 6 + Math.floor(Math.random() * 5);
    let categories = [
        "fashion",
        "nature",
        "abstract",
        "animals",
        "business",
        "cats",
        "city",
        "food",
        "nightlife",
    ];
    for (i = 0; i < count; i++) {
        imagesArr.push(`http://placeimg.com/640/480/${categories[ i % 9]}`);
    }

    return imagesArr;
};

const generateRecord = (i) => {
    return {
        name: faker.commerce.productName(),
        id: i,
        description: faker.commerce.productDescription(),
        materials: faker.lorem.sentence(),
        sustainibility: faker.lorem.sentence(),
        packaging: getPackaging(),
        sizes: getSizes(),
        imageUrls: getImages()
    };
};

const seedDb = async () => {
    const startTime = new Date();
    const numRecords = 10000;
    const groups = 10;
    let counter = 1;
    for (let i = 1; i <= groups; i++) {
        let records = [];
        while (records.length < numRecords / groups) {
            records.push(generateRecord(counter));
            counter++;
        };
        insertRecords(records, () => {
            if (i === groups) {
                db.db.close();
                console.log(`done adding records in ${new Date() - startTime} ms`);
            }
        });
    }
    console.log(`done generating records in ${new Date() - startTime} milliseconds`)
};

db.deleteMany({}, () => {
    console.log('database has been cleared and will be re-seeded');
    seedDb();
});

const insertRecords = (records, cb) => {
    db.insertMany(records, cb);
};
