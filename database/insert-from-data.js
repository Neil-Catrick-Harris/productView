const {mongo, postgres, cassandra} = require('./db-router.js');
const db = postgres;

db.connect()
.then(() => db.addMany(dataArray))
.then( (data) => {
    console.log(`${data.length} records succesfully inserted in ${new Date() - startTime} ms`);
    db.disconnect().then(() => console.log('Connection closed'));
})
.catch( (err) => {
    console.error(err);
})


/*
COPY testingitems (id, imageurls, name, description, materials, sustainibility, packaging_shortDesc, packaging_measurments_width, packaging_measurments_height, packaging_measurments_length, packaging_measurments_weight, packaging_measurments_packages, sizes_fitting, sizes_attributes_thread_count, sizes_attributes_Pillowcase_quantity, sizes_attributes_Duvet_cover_length, sizes_attributes_Duvet_cover_width, sizes_attributes_Pillowcase_length, sizes_attributes_Pillowcase_width)
FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data.csv'
DELIMITER ',' CSV HEADER;

***JSON VERSION

COPY testingitems (name, id, description, materials, sustainibility, packaging, sizes, imageUrls) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-10M.csv' DELIMITER ',' CSV HEADER;

THIS LINE WORKED with data-test.csv (when schema was set up accordingly)
COPY testingitems (id, name, description, materials, sustainibility) FROM '/Users/turnerkraus/Desktop/sdc/productView/database/data-test.csv' DELIMITER ',' CSV HEADER;