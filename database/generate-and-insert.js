const generateNRecords = require('./generate-records.js');
// const insertRecords = require('./insert-records.js');

(() => {
  const startTime = new Date();
  generateNRecords(10**7, (genDoneTime) => {
    // insertRecords((insDoneTime) => {
      console.log(`Total runtime for gen: ${genDoneTime - startTime} ms`);
      console.log('To load data into Postgres and Cassandra, please follow the steps in generate-and-insert.js to proceed');
    // });
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
/*
CASSANDRA:
1. Drop tables as needed (likely to have 'items', 'images', and 'item_images')

2. Run this in CQLSH:
CREATE TABLE items (
    itemId int PRIMARY KEY,
    name text,
    description text,
    materials text,
    sustainibility text,
    packaging_shortdesc text,
    packaging_measurments_width int,
    packaging_measurments_height int,
    packaging_measurments_length int,
    packaging_measurments_weight int,
    packaging_measurments_packages int,
    sizes_fitting text,
    sizes_attributes_threadcount int,
    sizes_attributes_pillowcase_quantity int,
    sizes_attributes_duvet_cover_length int,
    sizes_attributes_duvet_cover_width int,
    sizes_attributes_pillowcase_length int,
    sizes_attributes_pillowcase_width int,
    imageids text
);

CREATE TABLE images (
    imageId int PRIMARY KEY,
    imageUrl text
);

CREATE TABLE item_images (
    itemId int PRIMARY KEY,
    imageId int
);

****THESE WORKED:****
COPY images (imageId, imageurl) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-images.csv' with header=true and delimiter =',';

COPY items (itemid,name,description,materials,sustainibility,packaging_shortdesc,packaging_measurments_width,packaging_measurments_height,packaging_measurments_length,packaging_measurments_weight,packaging_measurments_packages,sizes_fitting,sizes_attributes_threadcount,sizes_attributes_pillowcase_quantity,sizes_attributes_duvet_cover_length,sizes_attributes_duvet_cover_width,sizes_attributes_pillowcase_length,sizes_attributes_pillowcase_width,imageids) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-products.csv' with header=true and delimiter =',';

COPY item_images (itemid, imageid) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-both.csv' with header=true and delimiter =',';
*/
