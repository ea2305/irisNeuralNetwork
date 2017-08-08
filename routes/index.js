'use strict';

let express = require('express');
let router = express.Router();
let path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname + '/../app/dist/index.html'));
});

router.post('/tester' , function ( req, res, next ) {
    let a = req.body;

    res
        .status(200)
        .json( {
            state : 200,
            data : a
        });

});

module.exports = router;
