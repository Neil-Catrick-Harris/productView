const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fastcsv = require('fast-csv');
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
        packaging: JSON.stringify(getPackaging()),
        sizes: JSON.stringify(getSizes()),
        imageUrls: getImages()
    };
};

const seedDb = async () => {
    const startTime = new Date();
    const numRecords = 1000000;
    let counter = 1;
    writer.pipe(fs.createWriteStream('data.csv'));
    for (let i = 1; i <= numRecords; i++) {
        writer.write(generateRecord(counter));
        counter++;
    }
    writer.end();
    let stream = fs.createReadStream('data.csv');
    let csvData = [];
    let csvStream = fastcsv.parse()
    .on('data', data => {
            csvData.push({
            name: data[0],
            id: data[1],
            description: data[2],
            materials: data[3],
            sustainibility: data[4],
            packaging: data[5] === 'packaging' ? data[5] : JSON.parse(data[5]),
            sizes: data[6] === 'sizes' ? data[6] : JSON.parse(data[6]),
            imageUrls: data[7],
    })})
    .on('end', () => {
        csvData.shift();
        console.log(`done generating records in ${new Date() - startTime} milliseconds`);
        insertRecords(csvData, () => console.log(`done seeding ${csvData.length} records in ${new Date() - startTime} milliseconds`));
    });
    stream.pipe(csvStream);
};

db.deleteMany({}, () => {
    console.log('database has been cleared and will be re-seeded');
    seedDb();
});

const insertRecords = (records, cb) => {
    db.insertMany(records, (err, res) => {
        if (err) {
            console.error(err);
        }
        cb();
        db.db.close();
    })
};
