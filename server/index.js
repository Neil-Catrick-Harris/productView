const app = require('./app');

const port = 3002;
app.listen(port, () => {
  console.log(`productView Server listening on port: ${port}`);
  //console.log(`DBMS in use is: ${app.dbName}`)
});
