const cors = function (options = {}) {
  return function (req, res, next) {
    console.log("running cors");
    if (options.url === req.url) {
      console.log("we hit the url specified");
    }
    next();
  };
};

module.exports = cors;
