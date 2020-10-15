const { Client } = require('pg');

const client = new Client({
  user: 'productview',
  host: 'localhost',
  database: 'productviewdb',
  password: 'pineapple',
  port: 5432,
});

const itemsSetup = `
CREATE TABLE items (
  id serial NOT NULL PRIMARY KEY,
  name varchar,
  description varchar,
  articleNumber varchar,
  details varchar,
  materials varchar,
  sustainibility varchar,
  packaging json,
  sizes json,
  imageUrls json
  );
`;

// const initialize = () => {
//   client.connect();
//   client.query('DROP TABLE IF EXISTS items')
//   .then(() => {
//     console.log('Table has been dropped');
//     client.query(itemsSetup)
//       .then(res => console.log('Table has been created'))
//       .catch(err => console.error(err))
//       // .finally(() => client.end());
//   });
// };

client.connect();

module.exports = client;
