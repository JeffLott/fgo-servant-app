var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj = JSON.parse(fs.readFileSync('./data/effects/effects.json', 'utf8'));

    res.send(obj);
});

module.exports = router;
