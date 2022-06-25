/*  
    Filename: index.js
    Name: Yuna Jung
    ID: 300972062
    Date: June 11 2022
*/
var express = require('express');
var router = express.Router();

let indexRouteController = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});



/* GET : endpoints to route to Logib */
router.get("/login", indexRouteController.displayLoginPage);
router.post("/login", indexRouteController.processLoginPage);

/* GET : endpoint to route to Logout */
router.get("/logout", indexRouteController.processLogout);

module.exports = router;
