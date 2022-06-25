/*  
    Filename: contact.js
    Name: Yuna Jung
    ID: 300972062
    Date: June 25 2022
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contactList");
function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET display contact list */
router.get("/", contactController.displayContactList);

/* GET particular contact info */
router.get("/edit/:id", requireAuth, contactController.displayEditPage);

/* POST particular contact info */
router.post("/edit/:id", requireAuth, contactController.processEditPage);
 
/* GET particular contact info */
router.get("/delete/:id", requireAuth, contactController.deleteContact);

module.exports = router;