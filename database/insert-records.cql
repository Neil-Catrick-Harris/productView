USE test_keyspace;

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id int PRIMARY KEY,
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
  imageurls text
);

COPY items (id,name,description,materials,sustainibility,packaging_shortdesc,packaging_measurments_width,packaging_measurments_height,packaging_measurments_length,packaging_measurments_weight,packaging_measurments_packages,sizes_fitting,sizes_attributes_threadcount,sizes_attributes_pillowcase_quantity,sizes_attributes_duvet_cover_length,sizes_attributes_duvet_cover_width,sizes_attributes_pillowcase_length,sizes_attributes_pillowcase_width,imageurls) FROM './database/data-full.csv' with header=true and delimiter =',';
