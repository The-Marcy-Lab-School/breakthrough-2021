var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const task = { name: "example" };
  res.json(task);
});

router.post("/", function (req, res, next) {
  res.status(201).json(req.body);
});

module.exports = router;
