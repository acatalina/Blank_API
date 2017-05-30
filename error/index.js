module.exports = (err, req, res, next) => {
  switch (err.code) {
    case '23502': 
      return res.status(400).send({reason: 'Invalid query'});
    case '22P02':
      return res.status(400).send({reason: 'Id must be a number'});
    case '22003':
      return res.status(500).send({reason: 'Max ids reached'});
    default:
      res.status(500).send({reason: 'Unknown error'});
  }
};