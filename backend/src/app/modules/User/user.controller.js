const catchAsync = require("../../../shared/catchAsync");
const userService = require("./user.service");
const { sendResponseOK } = require("../../../shared/response");

const registration = catchAsync(async (req, res, next) => {
  const result = await userService.registration(req.body);
  sendResponseOK(res, "resistration successful", result);
});

const login = catchAsync(async (req, res, next) => {
  const result = await userService.login(req.body);
  sendResponseOK(res, "Login Successful", result);
});

const checkauth = catchAsync(async (req, res, next) => {
  sendResponseOK(res, "Loged in", { data: req.user, token: req.token });
});

module.exports = {
  registration,
  login,
  checkauth,
};
