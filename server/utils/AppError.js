class AppError extends Error {
  constructor(message, statusCode, success) {
    super(message);

    this.statusCode = statusCode;
    this.success = success;
  }
}

module.exports = AppError;
