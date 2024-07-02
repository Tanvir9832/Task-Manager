const jwt = require("jsonwebtoken");

const User = require("../modules/User/user.model");
const ApiError = require("../../error/apiError");
const config = require("../../config/index")

const auth = async (model, req, next, token) => {
  try {

    if (!token) return next(new ApiError(400, "Please Login First"));

    const decodeToken = jwt.verify(token, config.jwt.secret);

    if (!decodeToken) return next(new ApiError(400, "Please Login First"));

    return await model.findById(decodeToken.id);
  } catch (error) {
    next(new ApiError(400, "Please Login First"));
  }
};

const authCheckUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const userDetails = await auth(User, req, next, token);

    if (!userDetails) return next(new ApiError(400, "Please Login First"));
    req.token = token;
    req.user = userDetails;
    next();
  } catch (error) {
    next(new ApiError(400, "Please Login First"));
  }
};

module.exports = {
  authCheckUser
}
