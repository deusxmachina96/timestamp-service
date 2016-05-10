var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:value', function(req, res, next) {
    var date;
    if(/^[0-9]+$/.test(req.params.value)) {
        date = new Date(parseInt(req.params.value) * 1000);
    } else {
        date = new Date(req.params.value);
    }
    if(Number.isNaN(date.getTime())) {
        res.json(null);
    }
    else
        res.json({unix: Math.floor(date.getTime() / 1000), natural: date.toDateString()});
});


module.exports = router;
