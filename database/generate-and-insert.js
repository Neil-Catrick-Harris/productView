const generateNRecords = require('./generate-records.js');
const insertRecords = require('./insert-records.js');

(() => {
  const startTime = new Date();
  generateNRecords(10**4, (genDoneTime) => {
    insertRecords((insDoneTime) => {
      console.log(`Total runtime for gen + ins: ${insDoneTime - startTime} ms`)
    });
  });
})()


/*
COPY largeschematestitems (id,name,description,materials,sustainibility,packaging_shortdesc,packaging_measurments_width,packaging_measurments_height,packaging_measurments_length,packaging_measurments_weight,packaging_measurments_packages,sizes_fitting,sizes_attributes_threadcount,sizes_attributes_pillowcase_quantity,sizes_attributes_duvet_cover_length,sizes_attributes_duvet_cover_width,sizes_attributes_pillowcase_length,sizes_attributes_pillowcase_width,imageurls) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-jsonexport.csv' DELIMITER ',' CSV HEADER;
*/
