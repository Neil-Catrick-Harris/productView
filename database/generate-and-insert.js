const generateNRecords = require('./generate-records.js');
const insertRecords = require('./insert-records.js');

(() => {
  const startTime = new Date();
  generateNRecords(10**7, (genDoneTime) => {
    insertRecords((insDoneTime) => {
      console.log(`Total runtime for gen + ins: ${insDoneTime - startTime} ms`)
    });
  });
})()
