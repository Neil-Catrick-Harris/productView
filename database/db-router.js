let MongoItem;

export const mongo = {
  connection: MongoItem,
  addOne: (record, cb)=> {
    MongoItem.create(record);
    cb();
  },
  addMany: (records, cb)=> {
    MongoItem.insertMany(records);
    cb();
  },
  deleteAll: (cb)=> {
    MongoItem.deleteMany({}, cb);
  },
  connect: (cb)=> {
    MongoItem = require('./index.js');
    cb();
  },
  disconnect: (cb) => {
    MongoItem.db.close(cb);
  },
};

export const postgres = {
  addOne: (record, cb)=> {

  },
  addMany: (records, cb)=> {

  },
  deleteAll: (cb)=> {

  },
  connect: (cb)=> {

  },
  disconnect: (cb)=> {

  },
};

export const postgres = {
  addOne: (record, cb)=> {

  },
  addMany: (records, cb)=> {

  },
  deleteAll: (cb)=> {

  },
  connect: (cb)=> {

  },
  disconnect: (cb)=> {

  },
};

