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
  getAll: (id) => {
    return new Promise((res, rej) => res(MongoItem.find({})));
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
  },
  getAll: () => {
    console.log('You have tried to get 10 million records from Postgres. That\'s going to take a long time. If this is not a mistake, please uncomment the corresponding line in db-router.js');
    // return PostgresItem.findAll();
  }
};

const cassandra = {
//   addOne: (record, cb = defaultCB)=> {

//   },
//   addMany: (records, cb = defaultCB)=> {

//   },
//   deleteAll: (cb = defaultCB)=> {

//   },
  connect: (cb = defaultCB)=> {
    return new Promise((res, rej) => res(CassandraItem = require('./cassandra.js')));
  },
  disconnect: (cb = defaultCB)=> {
    return new Promise((res, rej) => res(CassandraItem.shutdown()));
  },
  getOne: (id) => {
    return CassandraItem.query(`SELECT * FROM items WHERE itemId=${id}`);
  },
  getAll: () => {
    console.log('You have tried to get 10 million records from Cassandra. That\'s going to take a long time. If this is not a mistake, please uncomment the corresponding line in db-router.js');
  //   return CassandraItem.query(`SELECT * FROM items`);
  }
};

module.exports = { mongo, postgres, cassandra };
