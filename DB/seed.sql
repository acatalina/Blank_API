\c blank;

INSERT INTO areas(name)
  VALUES ('ancoats'), ('didsbury');

INSERT INTO restaurants(name, area_id, cuisine, website)
  VALUES ('tasca', 1, 'mediterraneum', 'www.tasca.com'),
    ('random pub', 2, 'english', 'www.random.pub'),
    ('indian place', 1, 'indian', 'www.indianplace.com'),
    ('chinese palace', 2, 'chinese', 'www.chinesepalace.co.uk');

INSERT INTO comments(restaurant_id, body)
  VALUES (1, 'cool place'), (1, 'nice!'), (1, 'highly recommended'), (1, 'ole!'),
    (2, 'it is ok'), (2, 'cheap enough!'), (2, 'highly recommended'), (2, 'good stuff'),
    (3, 'awesome'), (3, 'really cheap'), (3, 'you can bring your own drinks!'), (3, 'chilli naga++'),
    (4, 'cool palace'), (4, 'great atmosphere'), (4, 'recommended!'), (4, 'nice food');

INSERT INTO ratings(restaurant_id, rating)
  VALUES (1, 8), (1, 4), (1, 10), (1, 7), (2, 3), (2, 8), (2, 2), (2, 6), (2, 7),
    (3, 8), (3, 2), (3, 3), (3, 9), (4, 7), (4, 4), (4, 5), (4, 8);