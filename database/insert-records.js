const fs = require('fs');
const csv = require('@fast-csv/parse');

const db = require('./index.js');
const writtenData = fs.createReadStream('./database/data.csv');

let headers = [];
let idsAdded = {};

const parseData = data => {
  if (headers.length && !idsAdded[data[1]]) {
    const entry = {};
    headers.forEach((header, i) => {
      entry[header] = data[i];
    });
    idsAdded[data[1]] = true;
    return entry;
  }

  if (!headers.length) {
    // first row will be headers--set them for future reference
    headers = data;
    idsAdded[data[1]] = true;
  }

  return null;
};

const readStream = fs.createReadStream('./database/data.csv').pipe(csv.parse());

const seedDb = (stream, totalRowCount, callback) => {
  const startTime = new Date();
  //////////////////////////////Attempt from 1:30-3p on 10/17
  let j = 0;
  const read = () => {
    let ok2proceed = true;
    while (j < totalRowCount && ok2proceed) {
      j++;
      if (j === totalRowCount - 1) {
        stream.on('data', row => {
          const entry = parseData(row);
          db.create(entry)
            .then((response) => {
              db.db.close();
              return callback(new Date());
            })
        });
      } else {
        stream.on('data', row => {
          ok2proceed = false;
          let entry = parseData(row);
          if (entry) {
            db.create(entry)
              .then((response) => {
                ok2proceed = true;
              })
              .catch((err) => {
                ok2proceed = false;
                debugger;
                console.log('db creation error: ', err);
              });
          }
        });
      }
    }
    if (j < totalRowCount) {
      console.log('draining, j is ', j);
      stream.once('drain', read);
    }
  }
  read();
};

module.exports = (totalRowCount, callback) => {
  db.deleteMany({}, () => {
    // console.log('database has been cleared and will be re-seeded');
    seedDb(readStream, totalRowCount, callback);
  });
};

