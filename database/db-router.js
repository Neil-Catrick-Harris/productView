// This router is designed to work with promises to seed mongo, postgres, or cassandra databases
// It assumes you are using promises

let MongoItem;

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

const postgres = {};
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
