let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contactList");
function requireAuth(req, res, next) {
  // condition to check if user has logged in or not
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

//GET : Endpoint to display contact list
router.get("/", contactController.displayContactList);

//GET : endpoint for retriving particular contact info
router.get("/edit/:id", requireAuth, contactController.displayEditPage);
//router.get("/edit/:id", requireAuth, contactController.displayEditPage);

//POST : endpoint to update particular contact info
router.post("/edit/:id", requireAuth, contactController.processEditPage);

//GET : endpoint to delete particular contact info
router.get("/delete/:id", requireAuth, contactController.deleteContact);

module.exports = router;