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

const noSQLSheet = fs.createWriteStream('./database/data-full.csv');

const writeNRecords = (n, callback) => {
  const startTime = new Date();
  let i = n;
  let id = 5000000;
  const options = {
    verticalOutput: false,
    mapHeaders: (header) => '',
  }
  const write = async () => {
    let ok = true;
    while (i > 0 && ok) {
      i -= 1;
      id += 1;
      let rawRecord = generateRecord(id);
      let intermediateRecord = includeImageUrls(rawRecord);
      let noSQLRecord = await jsonexport(intermediateRecord, {verticalOutput: false});
      if (id !== 5000001) {
        noSQLRecord = noSQLRecord.split('\n').slice(1).join('');
      }
      noSQLRecord += '\n';
      if (i === 0) {
          noSQLSheet.write(noSQLRecord, 'utf8', () => {
              console.log(`${id} records written in ${new Date() - startTime} ms`);
              callback(new Date());
          });
      } else {
        ok = noSQLSheet.write(noSQLRecord, 'utf8');
      }
    }
    if (i > 0 && !ok) {
      noSQLSheet.once('drain', write);
    }
  }
  write();
};

module.exports = (n, callback) => {
  writeNRecords(n, callback);
};
