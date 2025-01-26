const { ApiError } = require('../utils/ApiError');
const mongoose = require('mongoose'); // Add this if using mongoose

const errorHandler = (err, req, res, next) => {
  let error = err;
  
  // Convert non-ApiError errors to ApiError
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? 400 : 500;
    const message = error.message;
    error = new ApiError(statusCode, message, error?.errors || [], err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    statusCode: error.statusCode,
    errors: error.errors,
    ...(process.env.NODE_ENV === 'development' ? { stack: error.stack } : {})
  };

  return res.status(error.statusCode).json(response);
};

module.exports = { errorHandler };