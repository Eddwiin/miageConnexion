const repl = require("repl");
const UserSchema = require("../models/user");
const mongoose = require("mongoose");
// const ObjectId = require('mongoose').Types.ObjectId;

const replServer = repl.start({ prompt: ">" });

mongoose.connect("mongodb://localhost:27017/miageConnexion", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

replServer.defineCommand("createAccount", {
  help: "Create account",
  action(email, password) {
    this.clearBufferedCommand();

    if (email === undefined && password === undefined) {
      console.log("you must to pass email and password");
      this.close();
    } else {
      UserSchema.findOne({ email: email }, (err, userResult) => {
        if (err) return console.error(err);
        else if (!!userResult) return console.warn("User already exist");
        else {
          const userToAdd = new UserSchema({
            _id: mongoose.Types.ObjectId(),
            email: email,
            password: password
          });

          userToAdd.save((err, result) => {
            if (err) console.error(err);
            else console.log("account created");
            this.close();
          });
        }
      });
    }
  }
});

replServer.defineCommand("updatePassword", {
  help: "Update password",
  action(email, oldPassword, newPassword) {
    // this.clearBufferedCommand();
    console.log(email, oldPassword);
    UserSchema.findOneAndUpdate(
      { email: email, oldPassword: oldPassword },
      { password: newPassword },
      (err, doc) => {
        if (err) console.error(err);
        else if (!doc) console.error("User not found");
        else console.log("Password updated");

        this.close();
      }
    );
  }
});
