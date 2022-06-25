let contacts = require("../models/contacts");

module.exports.displayContactList = (req, res, next) => {
  contacts.find((err, contacts) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("businesscontact/list", {
        title: "Business Contact",
        ContactList: contacts,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  console.log("edit id: " + id);
  contacts.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show the contact view
      res.render("businesscontact/edit", {
        title: "Edit a Contact",
        contact: contactToEdit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  let updatedContact = contacts({
    _id: id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });

  contacts.updateContact({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/businesscontact");
    }
  });
};

module.exports.deleteContact = (req, res, next) => {
  let id = req.params.id;
  // console.log("id:::" + id);
  contacts.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/businesscontact");
    }
  });
};