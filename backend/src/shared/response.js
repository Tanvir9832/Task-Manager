const httpStatus = require("http-status");

const sendResponseOK = (res, message = "success", data = []) => {
  const responseData = {
    statusCode: httpStatus.OK,
    success: true,
    message: message,
    data: data,
  };

  res.status(responseData.statusCode).json(responseData);
};

module.exports = {
  sendResponseOK,
};