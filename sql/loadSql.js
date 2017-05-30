const {QueryFile} = require('pg-promise');

module.exports = file => new QueryFile(file, {minify: true});