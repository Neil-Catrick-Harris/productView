const fs = require('fs');
const csv = require('@fast-csv/parse');

const {mongo, postgres, cassandra} = require('../database/db-router.js');
const db = postgres;
const { sequelize } = require('./postgres.js');
const writtenData = fs.createReadStream('./database/data.csv');

let headers = [];

const parseData = data => {
  if (!headers.length) {
    // first row will be headers--set them for future reference
    headers = data;
    return null;
  } else {
    const entry = {};
    headers.forEach((header, i) => {
      if (data[i].slice(0,4) === 'http') {
        // urls are delimited by semicolons
        entry[header] = data[i].split(';');
      } else {
        entry[header] = data[i];
      }
    });
    return entry;
  }
};

const seedDb = (callback) => {
  let totalRowCount;
  let i = 1;
  const startTime = new Date();
  /////////////////////////////////////////////////////////////////
  // The below works on the command line, but not as a sequelize query:
  /////////////////////////////////////////////////////////////////
  // sequelize.query(`COPY testingitems (id, name, description, materials, sustainibility) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data.csv' DELIMITER ',' CSV HEADER;`).then(results => {
  //   console.log('results: ', results);
  //   console.log(results.length, 'records added');
  //   callback();
  // });
  /////////////////////////////////////////////////////////////////
  // COPY testingpackaging (id, shortDesc, measurments) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-packaging.csv' DELIMITER ',' CSV HEADER;
  // COPY testingsizes (id, fitting, attributes) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-sizes.csv' DELIMITER ',' CSV HEADER;
  // COPY testingimages (id, imageUrls) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-images.csv' DELIMITER ',' CSV HEADER;
};

module.exports = (callback) => {
  db.connect()
  .then(() => db.deleteAll())
  // console.log('database has been cleared and will be re-seeded');
  .then(seedDb(callback));

};

