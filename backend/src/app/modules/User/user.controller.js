const catchAsync = require("../../../shared/catchAsync");
const userService = require("./user.service");
const {sendResponseOK}= require("../../../shared/response");

const registration = catchAsync(async (req, res, next) => {
    const result = await userService.registration(req.body);
    sendResponseOK(res, "resistration successful", result);
});

const login = catchAsync(async (req,res,next)=>{

});

module.exports = {
    registration,
    login
}