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
    let count = 6 + Math.floor(Math.random() * 2);
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

const addToDb = (record, isLastRecord) => {
    return db.create(record)
        .catch(err => {
        console.error(err);
    });
};

addLastToDb = (record, startTime) => {
    return db.create(record)
      .then(data => {
          const endTime = new Date();
          console.log(`done adding records to the db in ${endTime - startTime} milliseconds`);
          db.db.close(() => console.log('Connection closed'));
      });
}

const seedDb = async () => {
    const startTime = new Date();
    const numRecords = 100;
    for (let i = 1; i <= numRecords; i++) {
        if (i === numRecords) {
            addLastToDb(generateRecord(i), startTime)
        } else {
            addToDb(generateRecord(i));
        }
    };
};

db.deleteMany({}, () => {
    console.log('database has been cleared and will be re-seeded');
    seedDb();
});
