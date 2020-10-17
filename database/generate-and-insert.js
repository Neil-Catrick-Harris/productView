const generateNRecords = require('./generate-records.js');
const insertRecords = require('./insert-records.js');

(() => {
  const startTime = new Date();
  const numRecords = 10;
  generateNRecords(numRecords, genDoneTime => {
    insertRecords(numRecords, insDoneTime => {
      console.log(`Total runtime to generate & insert ${numRecords} records: ${insDoneTime - startTime} ms`)
    });
  });
})()
