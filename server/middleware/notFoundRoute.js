const notFound = (req, res, next) => {
  res.status(404).json({
    msg: "Route does not exist!",
    statusCode: 404,
    success: false,
  });
};

module.exports = notFound;
