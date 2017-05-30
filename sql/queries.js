const {QueryFile} = require('pg-promise');
const path = require('path');

const sql = file => {
  const fullPath = path.join(__dirname, file);
  
  return new QueryFile(fullPath, {minify: true});
};

module.exports = {
  areas: {
    get: sql('areas/get.sql'),
    add: sql('areas/add.sql')
  },
  restaurants: {
    get: sql('restaurants/get.sql'),
    getByArea: sql('restaurants/getByArea.sql'),
    add: sql('restaurants/add.sql')
  },
  comments: {
    get: sql('comments/get.sql'),
    add: sql('comments/add.sql')
  },
  ratings: {
    get: sql('ratings/get.sql'),
    add: sql('ratings/add.sql')
  }
};