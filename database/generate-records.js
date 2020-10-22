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

let getImageIds = (n) => {
  let imageIds = [];
  let count = 6 + Math.floor(Math.random() * 5);

  for (i = 0; i < count; i++) {
    imageIds.push((n + i) % 9);
  }

  return imageIds;
};

const writeImageRecords = async (document) => {
  let categories = ["fashion", "nature", "abstract", "animals", "business", "cats", "city", "food", "nightlife"];
  await document.write('id,url\n');
  categories.forEach(async (category, i) => {
    await document.write(`${i},${`http://placeimg.com/640/480/${category}`}\n`);
  });
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
    imageIds: getImageIds(i)
  };
};

const includeImageUrls = (record) => {
  let categories = ["fashion", "nature", "abstract", "animals", "business", "cats", "city", "food", "nightlife"];
  record.imageUrls = [];
  record.imageIds.forEach((id, i) => {
    record.imageUrls[i] = (`http://placeimg.com/640/480/${categories[id]}`);
  });
  delete record.imageIds;
  return record;
};

const getImageRelations = (id) => {
  let thruTableText = '';
  getImageIds(id).forEach(imageId => {
    thruTableText += `${id},${imageId}\n`;
  });
  return thruTableText;
};

const productDataSheet = fs.createWriteStream('./database/data-products.csv');
const imageDataSheet = fs.createWriteStream('./database/data-images.csv');
const throughSheet = fs.createWriteStream('./database/data-both.csv');
const noSQLSheet = fs.createWriteStream('./database/data-full.csv');

const writeNRecords = (n, document, callback) => {
  const startTime = new Date();
  let i = n;
  let id = 0;
  const options = {
    verticalOutput: false,
    mapHeaders: (header) => '',
  }
  throughSheet.write('itemsId,imagesId\n');
  const write = async () => {
    let ok1 = true;
    let ok2 = true;
    while (i > 0 && ok1 && ok2) {
      i -= 1;
      id += 1;
      let rawRecord = generateRecord(id);
      let record = await jsonexport(rawRecord, options);
      let intermediateRecord = includeImageUrls(rawRecord);
      let noSQLRecord = await jsonexport(intermediateRecord, {verticalOutput: false});
      if (id !== 1) {
        record = record.split('\n').slice(1).join('');
        noSQLRecord = noSQLRecord.split('\n').slice(1).join('');
      }
      record += '\n';
      noSQLRecord += '\n';
      if (i === 0) {
        document.write(record, 'utf8', () => {
          noSQLSheet.write(noSQLRecord, 'utf8', () => {
            throughSheet.write(getImageRelations(id), 'utf8', () => {
              console.log(`${id} records written in ${new Date() - startTime} ms`);
              callback(new Date());
            });
          });
        });
      } else {
        ok1 = document.write(record, 'utf8');
        ok2 = noSQLSheet.write(noSQLRecord, 'utf8');
        throughSheet.write(getImageRelations(id), 'utf8');
      }
    }
    if (i > 0 && !ok1) {
      document.once('drain', write);
    }
    if (i > 0 && !ok2) {
      noSQLSheet.once('drain', write);
    }
  }
  write();
};

module.exports = (n, callback) => {
  writeImageRecords(imageDataSheet);
  writeNRecords(n, productDataSheet, callback);
};
