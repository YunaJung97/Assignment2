/*  
    Filename: users.js
    Name: Yuna Jung
    ID: 300972062
    Date: June 25 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
