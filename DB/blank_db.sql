DROP DATABASE IF EXISTS blank;
CREATE DATABASE blank;
\c blank;

CREATE TABLE areas(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
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