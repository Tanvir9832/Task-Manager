const express = require("express");
const userController = require("./user.controller");

const userRouter = express.Router();

userRouter.route("/registration").post(userController.registration);
userRouter.route("/login").post(userController.login);
userRouter.route("/checkauth").get(userController.checkauth);

module.exports = userRouter;