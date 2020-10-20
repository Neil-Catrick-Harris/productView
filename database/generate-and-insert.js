const generateNRecords = require('./generate-records.js');
// const insertRecords = require('./insert-records.js');

(() => {
  const startTime = new Date();
  generateNRecords(10**3, (genDoneTime) => {
    // insertRecords((insDoneTime) => {
      console.log(`Total runtime for gen: ${genDoneTime - startTime} ms`);
      console.log('If using Postgres, you will need to follow the steps in generate-and-insert.js to proceed');
    // });
  });
})();


/*
FOLLOW THESE STEPS TO INSERT DATA INTO POSTGRESQL:
1. Run 'node database/postgres.js' in the terminal

2. Execute this command from psql:
COPY itemtests (id,name,description,materials,sustainibility,packaging_shortdesc,packaging_measurments_width,packaging_measurments_height,packaging_measurments_length,packaging_measurments_weight,packaging_measurments_packages,sizes_fitting,sizes_attributes_threadcount,sizes_attributes_pillowcase_quantity,sizes_attributes_duvet_cover_length,sizes_attributes_duvet_cover_width,sizes_attributes_pillowcase_length,sizes_attributes_pillowcase_width,imageids) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-products.csv' DELIMITER ',' CSV HEADER;

3. Execute from psql:
COPY imagetests (id,url) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-images.csv' DELIMITER ',' CSV HEADER;

4. Execute from psql:
COPY item_imagetests (itemId,imageId) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-both.csv' DELIMITER ',' CSV HEADER;
*/
