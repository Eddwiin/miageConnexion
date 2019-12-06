const AuthController = require("./../controllers/auth");

module.exports = app => {
  app.post("/sign-in", AuthController.signIn);
  app.get("/is-auth", AuthController.isAuth);
  app.post("/sign-up", AuthController.signUp);
  app.get("/private/sign-out", AuthController.signOut);
};
