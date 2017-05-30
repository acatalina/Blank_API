module.exports = {
  dev: {
    user: 'drasek',
    password: 'dd',
    database: 'blank'
  },
  test: {
    user: 'drasek',
    password: 'dd',
    database: 'blank_test'
  },
  production: {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    port: 5432
  }
  PORT: {
    test: '3030',
    dev: '3000'
  }
};