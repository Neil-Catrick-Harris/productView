# productView
## SETUP:
<br />1: NPM install dependencies
<br />2: Seed database: npm run seed:db -> should result in 100 records inserted
<br />3: start server: npm start
<br />4: Build client pack: npm run build

## CRUD Endpoints implemented by Ahmed Elawad
- Read: (GET): `/api/productView/products/:id`

## CRUD Endpoints: Added/Modified by Turner Kraus
### [Link to Express server](https://github.com/Neil-Catrick-Harris/productView/blob/master/server/app.js)
- Read: (GET): `/api/productView/products/:id`
  - `:id` is the product ID (default is #1-10 million)
  - e.g. GET request to `/api/productView/products/2` sends product information for product with `id = 2`
  - GET request to `/api/productView/products` sends entire database, if possible

- Create: (POST): `/api/productView/products`
  - Product information included in the body of the request will be added to new product in database

- Update: (PUT): `/api/productView/products/:id`
  - Use `id` property (not `_id`) to access item saved in db
  - Provide id in URL and parameters that should be changed in the body of the request
  - e.g. PUT request sent to `/api/productView/editProductById/4` with `body = { description: "new description" }` will change the description of the product with id 4 to "new description".

- Delete: (DELETE): `/api/productView/products/:id`
  - Use `id` property (not `_id`) to access item saved in db
  - Provide id in URL
  - e.g. DELETE request to `/api/productView/deleteProductById/6` will delete product with ID 6
