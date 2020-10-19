const faker = require('faker');
const fs = require('fs');
const jsonexport = require('jsonexport');

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
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    materials: faker.lorem.sentence(),
    sustainibility: faker.lorem.sentence(),
    packaging: getPackaging(),
    sizes: getSizes(),
    imageUrls: getImages(i)
  };
};

const writeRecords = fs.createWriteStream('./database/data.csv');

const writeNRecords = (n, document, callback) => {
  const startTime = new Date();
  let i = n;
  let id = 0;
  const options = {
    verticalOutput: false,
    mapHeaders: (header) => '',
    includeHeaders: false,
  }
  const write = async () => {
    let ok = true;
    while (i > 0 && ok) {
      i -= 1;
      id += 1;
      let record = await jsonexport(generateRecord(id), options);
      if (id !== 1) {
        record = record.split('\n').slice(1).join('');
      }
      record += '\n';
      if (i === 0) {
        document.write(record, 'utf8', () => {
          console.log(`${id} records written in ${new Date() - startTime} ms`);
          callback(new Date());
        });
      } else {
        ok = document.write(record, 'utf8');
      }
    }
    if (i > 0) {
      document.once('drain', write);
    }
  }
  write();
};

module.exports = (n, callback) => {
  writeNRecords(n, writeRecords, callback);
};
