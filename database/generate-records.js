const faker = require('faker');
const fs = require('fs');

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

const makeCSV = (obj) => {
  return `${obj.name},${obj.id},${obj.description},${obj.materials},${obj.sustainibility},${obj.packaging},${obj.sizes},${obj.imageUrls}\n`;
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

const writeRecords = fs.createWriteStream('./database/data.csv');
writeRecords.write('name,id,description,materials,sustainibility,packaging,sizes,imageUrls\n', 'utf8');

const writeNRecords = (n, document) => {
  const startTime = new Date();
  let i = n;
  let id = 0;
  const write = () => {
    let ok = true;
    while (i > 0 && ok) {
      i -= 1;
      id += 1;
      const record = makeCSV(generateRecord(id));
      if (i === 0) {
        document.write(record, 'utf8', () => {
          console.log(`${id} records written in ${new Date() - startTime} ms`);
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

writeNRecords(10**7, writeRecords);
