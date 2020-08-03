const async = require("async");
const userSchema = require("./../models/user");
const helpers = require("./../helpers/utils");
const ObjectId = require("mongoose").Types.ObjectId;

const AuthController = {};

AuthController.signIn = (req, res) => {
  userSchema.findOne(
    { email: req.body.user.email, password: req.body.user.password },
    (err, user) => {
      if (err) return helpers.catchError(res, err);
      else if (!user) return res.status(400).json({ error: "Not auth" });
      else {
        req.session.user = user;
        return res.status(200).json({ user: req.session.user });
      }
    }
  );
};

AuthController.signUp = (req, res) => {
  async.waterfall(
    [
      done => {
        userSchema.findOne({ email: req.body.user.email }, (err, user) => {
          if (user) {
            return res
              .status(200)
              .json({ message: "User already exist in database" });
          }

          done(err, user);
        });
      },

      (user, done) => {
        const userToAdd = new userSchema({
          _id: ObjectId(),
          email: req.body.user.email,
          password: req.body.user.password
        });

        userToAdd.save((err, userAdded) => {
          if (err) done(err);
          return res.status(200).json(true);
        });
      }
    ],
    err => {
      return helpers.catchError(res, err);
    }
  );
};

AuthController.isAuth = (req, res) =>
  res.status(200).json({ isAuth: !!req.session.user });

AuthController.signOut = (req, res) => {
  req.session.destroy(err => {
    if (err) return helpers.catchError(res, err);
    return res.status(200).json({ isUnAuth: true });
  });
};

module.exports = AuthController;
