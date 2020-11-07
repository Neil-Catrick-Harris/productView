# Product View
This is the Product View service for the Mykea e-commerce app. When implemented, it renders product information for the product ID specified in the URL (e.g. `/products/12` shows the details for the product whose product ID is #12).

## SETUP:
<br />1: Install dependencies: `npm install`
<br />2: Seed database: `npm run seed`
<br />3: Start server: `npm start`
<br />4: Build client bundle: `npm run build`

## CRUD Endpoints
### [Link to Express server](https://github.com/Neil-Catrick-Harris/productView/blob/master/server/app.js)
- Read: (GET): `/api/productView/products/:id`
  - `:id` can be either the product ID (default is #1-100) OR `all` (responds with entire database)
  - e.g. GET request to `/api/productView/products/2` sends product information for product with `id = 2`
  - e.g. GET request to `/api/productView/products/all` sends all product information

- Create: (POST): `/api/productView/addProduct`
  - Product information included in the body of the request will be added to new product in database

- Update: (PUT): `/api/productView/editProductById/:id`
  - Use `id` property (not `_id`) to access item saved in db
  - Provide id in URL and parameters that should be changed in the body of the request
  - e.g. PUT request sent to `/api/productView/editProductById/4` with `body = { description: "new description" }` will change the description of the product with id 4 to "new description".

- Delete: (DELETE): `/api/productView/deleteProductById/:id`
  - Use `id` property (not `_id`) to access item saved in db
  - Provide id in URL
  - e.g. DELETE request to `/api/productView/deleteProductById/6` will delete product with ID 6
