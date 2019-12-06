const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: String,
    email: String,
    password: String
  },
  {
    collection: "User"
  }
);

module.exports = mongoose.model("User", UserSchema);
