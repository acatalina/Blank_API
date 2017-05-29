const router = require('express').Router();

router.use('/', (req, res) => {
  res.status(200).send({status: 'OK'});
});

module.exports = router;