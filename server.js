const app = require('express')();
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3000;

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});