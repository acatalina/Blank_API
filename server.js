if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const app = require('express')();
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || require('./.config').PORT[process.env.NODE_ENV];

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});

module.exports = app;