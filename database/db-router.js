// This router is designed to work with promises to seed mongo, postgres, or cassandra databases
// It assumes you are using promises

let MongoItem, PostgresItem, CassandraItem;

const defaultCB = () => {};

const mongo = {
  connection: MongoItem,
  addOne: (record)=> {
    return new Promise((res, rej) => res(MongoItem.create(record)));
  },
  addMany: (records)=> {
    return new Promise((res, rej) => res(MongoItem.insertMany(records)));
  },
  deleteAll: ()=> {
    return new Promise((res, rej) => res(MongoItem.deleteMany({})));
  },
  connect: ()=> {
    return new Promise((res, rej) => res(MongoItem = require('./index.js')));
  },
  disconnect: () => {
    return new Promise((res, rej) => res(MongoItem.db.close()));
  },
};

const postgres = {
  connection: PostgresItem,
  addOne: (record)=> {
    return new Promise((res, rej) => {
      let keyString = 'INSERT INTO items (';
      let valString = 'VALUES (';
      for (let key in record) {
        keyString += key + ', ';
        valString += JSON.stringify(record[key]) + ', ';
      }
      let thisQuery = `${keyString.slice(0, -2)}) ${valString.slice(0, -2)});`
      res(PostgresItem.query(thisQuery));
    })
  },
  addMany: (records)=> {
    return new Promise((res, rej) => {
      let keyString = 'INSERT INTO items (';
      let valString = 'VALUES (';
      for (let key in records[0]) {
        keyString += key + ', ';
      }
      records.forEach(record => {
        valString
      })
      res(PostgresItem.query(thisQuery));
    });
  },
  deleteAll: ()=> {
    return new Promise((res, rej) => res());
  },
  connect: ()=> {
    return new Promise((res, rej) => res(PostgresItem = require('./postgres.js')));
  },
  disconnect: () => {
    return new Promise((res, rej) => res(PostgresItem.end()));
  },
};

const cassandra = {};
//   addOne: (record, cb = defaultCB)=> {

//   },
//   addMany: (records, cb = defaultCB)=> {

//   },
//   deleteAll: (cb = defaultCB)=> {

//   },
//   connect: (cb = defaultCB)=> {

//   },
//   disconnect: (cb = defaultCB)=> {

//   },
// };

module.exports = { mongo, postgres, cassandra };
