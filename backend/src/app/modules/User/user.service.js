const httpStatus = require("http-status");

const User = require("./user.model");
const ApiError = require("../../../error/apiError");
const repository = require("../../repository/repository");
const { validateEmail } = require("../../../shared/validation");

//! registration
const registration = async (data) => {
  // validation
  if (data.name.trim().length === 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Name is missing");

  if (data.email.trim().length === 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is missing");
  else if (!validateEmail(data.email))
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid email");

  if (data.password.trim().length === 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Password is missing");

  //making email lowercase
  data = { ...data, email: email.toLowerCase() };

  // check if user exists
  const user = await repository.getOne(User, { email: data.email });

  if (user)
    throw new ApiError(httpStatus.BAD_REQUEST, "Try with different email");

  // create user
  const createdUser = await repository.create(User, data);

  return createdUser;
};

//! login
const login = async (data) => {
  //validation
  if (data.email.trim().length === 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Email is missing");

  if (data.password.trim().length === 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Password is missing");

  //making email lowercase
  data = { ...data, email: email.toLowerCase() };

  //Find user with the email
  const user = await repository.getOne(
    User,
    { email: data.email },
    [],
    "+password"
  );

  //Check if the user exists
  if (!user)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invalid credential/email or password"
    );

  //check password
  const isMatch = await user.isPasswordMatched(data.password);

  if (!isMatch)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "invalid credentials/email or password"
    );

  user.password = "";
  //token generation
  const token = await user.generateToken();
  return { user, token };
};

module.exports = {
  registration,
  login,
};
