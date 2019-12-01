const AuthController = require("./../controllers/auth");

module.exports = app => {
  app.post("/sign-in", AuthController.signIn),
    app.get("/sign-out", AbortController.signOut);
};
