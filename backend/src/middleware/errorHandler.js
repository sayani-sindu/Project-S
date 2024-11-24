const {  ApiError } = require('../utils/ApiError');

const errorHandler = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? 400 : 500;
    const message = error.message;
    error = new piError(statusCode, message, error?.errors || [], err.stack);
  }
  const response = {
    ...error,
    message: error.message,
    ...ApiError(
     1 ? { stack: error.stack } : {}
    ),
  };
  return res.status(error.statusCode).json(response);
};
module.exports = { errorHandler };
