let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let contactModel = mongoose.Schema(
  {
    name: String,
    number: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);

let User = mongoose.Schema(
  {
    username: String,
    displayName: String,
    email: String,
    password: String
  },
  {
    collection: "users",
  }
);

// configure options for User Model
let options = { missingPasswordError: "Wrong/Missing Password" };
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model("User", User);