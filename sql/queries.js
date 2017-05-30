const {QueryFile} = require('pg-promise');
const path = require('path');

const sql = file => {
  const fullPath = path.join(__dirname, file);
  
  return new QueryFile(fullPath, {minify: true});
};

module.exports = {
  restaurants: {
    add: sql('restaurants/add.sql')
  },
  areas: {
    add: sql('areas/add.sql')
  },
  comments: {
    add: sql('comments/add.sql')
  },
  ratings: {
    add: sql('ratings/add.sql')
  }
};