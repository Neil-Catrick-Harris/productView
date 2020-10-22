// This router is designed to work with promises to seed mongo, postgres, or cassandra databases
// It assumes you are using promises

let MongoItem, PostgresItem, ImageItem, shutdownPostgres, CassandraItem;

const mongo = {
  name: 'MongoDB',
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
  connect: (isConnected)=> {
    if (!isConnected) {
      return new Promise((res, rej) => res(MongoItem = require('./index.js')));
    }
    return new Promise((res, rej) => res());
  },
  disconnect: () => {
    return new Promise((res, rej) => res(MongoItem.db.close()));
  },
  getOneById: (id) => {
    return new Promise((res, rej) => res(MongoItem.find({ id: parseInt(id) })));
  },
  getAll: (id) => {
    return new Promise((res, rej) => res(MongoItem.find({})));
  },
};

const postgres = {
  name: 'PostgreSQL',
  connection: PostgresItem,
  addOne: (record)=> {
    return new Promise((res, rej) => res(PostgresItem.create(record[0])));
  },
  addMany: (records)=> {
    return new Promise((res, rej) => res(PostgresItem.bulkCreate(records)));
  },
  deleteAll: ()=> {
    console.log('You have tried to delete 10 million records from Postgres. That\'s going to take a long time to un-do. If this is not a mistake, please uncomment the corresponding line in db-router.js');
    // return new Promise((res, rej) => res(PostgresItem.destroy({
      // where: {},
      // truncate: true
    // })));
  },
  connect: (isConnected)=> {
    if (!isConnected) {
      return new Promise((res, rej) => {
        let { Product, Image, shutdownPostgres } = require('./postgres.js');
        ImageItem = Image;
        res(PostgresItem = Product);
      });
    }
    return new Promise((res, rej) => res());
  },
  disconnect: () => {
    return new Promise((res, rej) => res());
  },
  getOneById: (id) => {
    return PostgresItem.findOne({ where: { id }})
      .then(result => parsePostgresData(result));
  },
  getOneByField: (field, value) => {
    return PostgresItem.findOne({ where: { [field]: value }});
  },
  getImages: () => {
    return ImageItem.findAll();
  },
  getAll: () => {
    console.log('You have tried to get 10 million records from Postgres. That\'s going to take a long time. If this is not a mistake, please uncomment the corresponding line in db-router.js');
    // return PostgresItem.findAll();
  }
};

const cassandra = {
  name: 'Cassandra',
  connection: CassandraItem,
  addOne: (record)=> {
    CassandraItem.query(`INSERT INTO items JSON '{
      "id": ${record.id},
      "name": ${record.name},
      "description": ${record.description},
      "materials": ${record.materials},
      "sustainibility": ${record.sustainibility},
      "packaging_shortdesc": ${record.packaging.shortDesc},
      "packaging_measurments_width": ${record.packaging.measurments.width},
      "packaging_measurments_height": ${record.packaging.measurments.height},
      "packaging_measurments_length": ${record.packaging.measurments.length},
      "packaging_measurments_weight": ${record.packaging.measurments.weight},
      "packaging_measurments_packages": ${record.packaging.measurments.packages},
      "sizes_fitting": ${record.sizes.fitting},
      "sizes_attributes_threadcount": ${record.sizes.attributes.thread-count},
      "sizes_attributes_pillowcase_quantity": ${record.sizes.attributes['Pillowcase quantity']},
      "sizes_attributes_duvet_cover_length": ${record.sizes.attributes['Duvet cover length']},
      "sizes_attributes_duvet_cover_width": ${record.sizes.attributes['Duvet cover width']},
      "sizes_attributes_pillowcase_length": ${record.sizes.attributes['Pillowcase length']},
      "sizes_attributes_pillowcase_width": ${record.sizes.attributes['Pillowcase width']},
      "imageurls": ${record.imageUrls.join(';')}}';
      `)
  },
  deleteAll: ()=> {
    console.log('You have tried to delete 10 million records from Postgres. That\'s going to take a long time to un-do. If this is not a mistake, please uncomment the corresponding line in db-router.js');
    // CassandraItem.query('drop table items;');
  },
  connect: (isConnected)=> {
    if (!isConnected) {
      return new Promise((res, rej) => res(CassandraItem = require('./cassandra.js')));
    }
    return new Promise((res, rej) => res());
  },
  disconnect: ()=> {
    return new Promise((res, rej) => res(CassandraItem.shutdown()));
  },
  getOneById: (id) => {
    return CassandraItem.execute(`SELECT * FROM items WHERE id=${id}`)
      .then(result => parseCassandraData(result));
  },
  getOneByField: (field, value) => {
    return CassandraItem.execute(`SELECT * FROM items WHERE ${field}='${value}'`);
  },
  getAll: () => {
    console.log('You have tried to get 10 million records from Cassandra. That\'s going to take a long time. If this is not a mistake, please uncomment the corresponding line in db-router.js');
  //   return CassandraItem.query(`SELECT * FROM items`);
  }
};

/////// Helper functions to format data prior to sending/////////

const parseData = (obj) => {
  return {
    id: obj.id,
    name: obj.name,
    description: obj.description,
    materials: obj.materials,
    sustainibility: obj.sustainibility,
    packaging: {
      shortDesc: obj['packaging_shortdesc'],
      measurments: {
        width: obj['packaging_measurments_width'],
        height: obj['packaging_measurments_height'],
        length: obj['packaging_measurments_length'],
        packages: obj['packaging_measurments_packages'],
      }
    },
    sizes: {
      fitting: obj['sizes_fitting'],
      attributes: {
        'thread-count': obj['sizes_attributes_threadcount'],
        'Pillowcase quantity': obj["sizes_attributes_pillowcase_quantity"],
        'Duvet cover length': obj["sizes_attributes_duvet_cover_length"],
        'Duvet cover width': obj["sizes_attributes_duvet_cover_width"],
        'Pillowcase length': obj["sizes_attributes_pillowcase_length"],
        'Pillowcase width': obj['sizes_attributes_pillowcase_width'],
      }
    },
  }
}

const parseCassandraData = (resultSet) => {
  let obj =  parseData(resultSet.rows[0]);
  obj.imageUrls = resultSet.rows[0].imageurls.split(';');
  return obj;
}

const parsePostgresData = (result) => {
  let imageUrls = [];
  return postgres.getImages()
    .then(rows => {
      rows.forEach(item => {
        imageUrls.push(item.url);
      });
      return result;
    })
    .then(result => {
      let obj = parseData(result._previousDataValues);
      obj.imageUrls = imageUrls;
      return obj;
    });
}

module.exports = { mongo, postgres, cassandra };
