var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const users = ["one", "two"];
  res.json(users);
});

module.exports = router;
