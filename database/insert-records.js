
const db = require('./index.js');
const generateRecords = require('./generate-records.js');

db.deleteMany({}, () => {
  console.log('database has been cleared and will be re-seeded');
  seedDb();
});

const seedDb = () => {
  const startTime = new Date();
  const numRecords = 100;
  let isLastOne = false;
  generateRecords(numRecords, (record) => {
    if (record) {
      db.create(record)
        .then(() => {
          if (isLastOne) {
            db.db.close();
          }
        })
    }
  },
  () => {
    console.log(`done seeding ${numRecords} records in ${new Date() - startTime} ms`);
    isLastOne = true;
  });
};

