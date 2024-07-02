const express = require("express");
const userController = require("./user.controller");
const auth = require("../../middleware/authentication");

const userRouter = express.Router();

userRouter.route("/registration").post(userController.registration);
userRouter.route("/login").post(userController.login);
userRouter.route("/checkauth").get(auth.authCheckUser,userController.checkauth);

module.exports = userRouter;