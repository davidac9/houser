CREATE TABLE houses (
    house_id serial primary key,
    name varchar,
    address text,
    city VARCHAR
);

ALTER TABLE houses
ADD COLUMN zip_code INTEGER;

alter table houses
add column image text,
add column monthly_mortgage integer,
add column rent integer;

ALTER TABLE houses
ADD COLUMN state varchar(2);