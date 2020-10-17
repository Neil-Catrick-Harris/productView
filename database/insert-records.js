const fs = require('fs');
const csv = require('@fast-csv/parse');

const db = require('./index.js');
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
  fs.createReadStream('./database/data.csv')
  .pipe(csv.parse())
  .on('error', err => console.log('pipe/parse error:', err))
  .on('data', row => {
    const entry = parseData(row);
    if (entry) {
      db.create(entry).then(() => {
        i++;
        if (i === totalRowCount) {
          db.db.close();
          console.log(`${totalRowCount - 1} records seeded in ${new Date() - startTime} ms`);
          callback(new Date());
        }
      }).catch((err) => console.log('entry creation error:', err));
    }
  })
  .on('end', (count) => totalRowCount = count);
};

module.exports = (callback) => {
  db.deleteMany({}, () => {
    // console.log('database has been cleared and will be re-seeded');
    seedDb(callback);
  });
};

