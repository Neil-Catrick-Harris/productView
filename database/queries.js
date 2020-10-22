const { postgres, cassandra } = require('./db-router.js');
const fs = require('fs');
const exampleObjFile = fs.createWriteStream('./database/example-objects.json');

let pgQueries = {};
let cassandraQueries = {};

const dbArray = [postgres, cassandra];

const addTime = (times, events, event) => {
  events.push(event);
  if (times.length) {
    times.push(new Date() - times[0]);
  } else {
    times.push(new Date());
  }
}
console.log(`~~~~~~~~~~~~~~~~~~~~Starting tests~~~~~~~~~~~~~~~~~~~~`);

const numTests = 9;

for (let i = 1; i <= numTests; i++) {

  let arbitraryLargeNumber = 10**7 - Math.floor(Math.random() * 1000);

  dbArray.forEach( async (db, j) => {
    let times = [];
    let events = [];
    addTime(times, events, 'start');

    const printResult = (result, dbName) => {
      if (dbName === 'Cassandra') {
        cassandraQueries[result.name] = new Date() - times[0];
      } else {
        pgQueries[result.name] = new Date() - times[0];
      }
      return result.name;
    };

    await db.connect()
      .then(() => {
        addTime(times, events, 'get one by id');
        return db.getOneById(arbitraryLargeNumber)
      })
      .then(result1 => {
        addTime(times, events, 'got one by id');
        return printResult(result1, db.name);
      })
      .finally(() => {
        db.disconnect();
        if (i === numTests && j === dbArray.length - 1) {
          addAverage(pgQueries);
          addAverage(cassandraQueries);
          console.log('postgres query times (ms):', pgQueries);
          console.log('cassandra query times (ms):', cassandraQueries);
        }
      });
  });
}

const addAverage = (object) => {
  let values = Object.values(object);
  object['Average'] = values.reduce((a, b) => a + b) / values.length;
}
