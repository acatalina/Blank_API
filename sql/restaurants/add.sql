INSERT INTO restaurants(name, area_id, cuisine, website) VALUES($1, $2, $3, $4) RETURNING *;