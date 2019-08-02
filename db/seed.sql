CREATE TABLE houses (
    house_id serial primary key,
    name varchar,
    address text,
    city VARCHAR
);

ALTER TABLE houses
ADD COLUMN zip_code INTEGER;