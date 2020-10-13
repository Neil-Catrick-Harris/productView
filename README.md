# productView
SETUP:
1: NPM install dependencies
2: Seed database: npm run seed:db -> should result in 100 records inserted
3: start server: npm start
4: Build client pack: npm run build

CRUD Endpoints implemented by Ahmed Elawad
- Read: (GET): '/api/productView/products/:id'

CRUD Endpoints: Added by Turner Kraus
- Create: (POST): '/api/productView/addProduct'
  - Include product information in the body of the request
- Update: (PUT)
- Delete: (DELETE)
