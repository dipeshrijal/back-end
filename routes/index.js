var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ id: 1, title: "hello world" })
});

module.exports = router;
