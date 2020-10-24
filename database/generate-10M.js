const generateNRecords = require('./generate-records.js');

(() => {
  const startTime = new Date();
  generateNRecords(10**7, (genDoneTime) => {
    console.log(`Total runtime for gen: ${genDoneTime - startTime} ms`);
    console.log('To load data into Postgres and Cassandra, please follow the steps in generate-and-insert.js to proceed');
  });
})();


/*
FOLLOW THESE STEPS TO INSERT DATA INTO POSTGRESQL:
1. Drop tables as needed (likely to have 'items', 'images', and 'item_images')

2. Run 'node database/postgres.js' in the terminal

3. Execute this command from psql:
COPY items (id,name,description,materials,sustainibility,packaging_shortdesc,packaging_measurments_width,packaging_measurments_height,packaging_measurments_length,packaging_measurments_weight,packaging_measurments_packages,sizes_fitting,sizes_attributes_threadcount,sizes_attributes_pillowcase_quantity,sizes_attributes_duvet_cover_length,sizes_attributes_duvet_cover_width,sizes_attributes_pillowcase_length,sizes_attributes_pillowcase_width,imageids) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-products.csv' DELIMITER ',' CSV HEADER;

4. Execute from psql:
COPY images (id,url) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-images.csv' DELIMITER ',' CSV HEADER;

5. Execute from psql:
COPY item_images (itemId,imageId) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-both.csv' DELIMITER ',' CSV HEADER;
*/
//////////////////////////////////////////////////////////////////////////////////////////