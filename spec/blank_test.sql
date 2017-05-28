DROP DATABASE IF EXISTS blank_test;
CREATE DATABASE blank_test;
\c blank_test;

CREATE TABLE areas(
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE restaurants(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  area_id INTEGER,
  FOREIGN KEY (area_id) REFERENCES areas(id),
  cuisine VARCHAR NOT NULL,
  website VARCHAR NOT NULL
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  body VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
  
CREATE TABLE ratings(
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  rating INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO areas(name)
  VALUES ('ancoats');

INSERT INTO restaurants(name, area_id, cuisine, website)
  VALUES ('tasca', 1, 'mediterraneum', 'www.tasca.com');

INSERT INTO comments(restaurant_id, body)
  VALUES (1, 'cool place'), (1, 'nice!'), (1, 'highly recommended'), (1, 'ole!');

INSERT INTO ratings(restaurant_id, rating)
  VALUES (1, 8), (1, 4), (1, 10), (1, 7);