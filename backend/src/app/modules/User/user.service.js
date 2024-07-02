const httpStatus = require("http-status");

const User = require("./user.model");
const ApiError = require("../../../error/apiError");



//! registration
const registration = async (data) => {
    // validation
  if (!data.username)
    throw new ApiError(httpStatus.BAD_REQUEST, "Username is missing");
  if (!data.email)
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is missing");
  if (!data.password)
    throw new ApiError(httpStatus.BAD_REQUEST, "Password is missing");

    // check if user exists
  const user = await repository.getOne(User,{ email: data.email });

  if(user)
    throw new ApiError(httpStatus.BAD_REQUEST, "Try with different email");

    // create user
  const createdUser = await repository.create(User, data);

  return createdUser;
};

module.exports = {
    registration,
}