const errorHandling = (error, req, res, next) => {
  console.log("Middlware Connection");
  next();
};

module.exports = errorHandling;
