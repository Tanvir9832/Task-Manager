const catchAsync = require("../../../shared/catchAsync");

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