const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fastcsv = require('fast-csv');
const { finished } = require('stream');

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

let getImages = (n) => {
  let imagesArr = [];
  let count = 6 + Math.floor(Math.random() * 5);
  let categories = ["fashion", "nature", "abstract", "animals", "business", "cats", "city", "food", "nightlife"];

  for (i = 0; i < count; i++) {
    imagesArr.push(`http://placeimg.com/640/480/${categories[ (n + i) % 9]}`);
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
    imageUrls: JSON.stringify(getImages(i))
  };
};

const parseData = data => {
  if (data[0] !== 'name') {
    return {
      name: data[0],
      id: data[1],
      description: data[2],
      materials: data[3],
      sustainibility: data[4],
      packaging: JSON.parse(data[5]),
      sizes: JSON.parse(data[6]),
      imageUrls: JSON.parse(data[7]),
    };
  }
  return null;
};

const writeRecords = (n, cb = () => {}, done =() => {console.log('done')}) => {
  const startTime = new Date();
  const numRecords = n;
  let counter = 1;
  writer.pipe(fs.createWriteStream('./database/data.csv'));
  for (let i = 1; i <= numRecords; i++) {
    writer.write(generateRecord(counter));
    counter++;
  }
  writer.end();
};
// let stream = fs.createReadStream('./database/data.csv');
// let csvStream = fastcsv.parse()
// .on('data', (data) => cb(parseData(data)))
// .on('end', () => {
//   done();
// });
// stream.pipe(csvStream);
// finished(stream, (err) => {
//   if (err) { return console.log('Stream failed.', err) }
//   console.log('Stream is done reading');
// })

writeRecords(10000000);
// module.exports = generateRecords;
