const mongoose = require("mongoose");

const UserSchema = new UserSchema(
  {
    _id: String,
    _email: String,
    password: String
  },
  {
    collection: "User"
  }
);

module.exports = mongoose.model("User", UserSchema);
