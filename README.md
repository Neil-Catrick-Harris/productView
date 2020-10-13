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
- Update: (PUT): '/api/productView/editProductById'
  - Use "id" property (not "_id") to access database
  - Provide id AND parameters that should be changed in the body of the request
  - e.g. body = { id: 4, description: "new description" } will change the description of the product with id 4 to 'new description'.
- Delete: (DELETE)
