var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.send("enviando datos de resultados");
});

module.exports = router;
