// This router is designed to work with promises to seed mongo, postgres, or cassandra databases
// It assumes you are using promises

let MongoItem, PostgresItem, shutdownPostgres, CassandraItem;

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
  getOne: (id) => {
    return new Promise((res, rej) => res(MongoItem.find({ id: parseInt(id) })));
  },
};

const postgres = {
  connection: PostgresItem,
  addOne: (record)=> {
    return new Promise((res, rej) => res(PostgresItem.create(record[0])));
  },
  addMany: (records)=> {
    return new Promise((res, rej) => res(PostgresItem.bulkCreate(records)));
  },
  deleteAll: ()=> {
    return new Promise((res, rej) => res(PostgresItem.destroy({
      where: {},
      truncate: true
    })));
  },
  connect: ()=> {
    return new Promise((res, rej) => {
      let { Product, shutdownPostgres } = require('./postgres.js');
      res(PostgresItem = Product);
    });
  },
  disconnect: () => {
    return new Promise((res, rej) => res());
  },
  getOne: (id) => {
    return PostgresItem.findOne({ where: { id }});
  }
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
