const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'test_keyspace'
});

// const query = `SELECT * FROM items WHERE itemId=${9999999};`;

// client.execute(query)
//   .then(result => console.log(result));


module.exports = client;
