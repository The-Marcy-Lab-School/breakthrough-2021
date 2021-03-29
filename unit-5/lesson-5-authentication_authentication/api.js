const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("./users");
const { request } = require("express");

router.use(express.json());

const secretKey = "notverysecretorsecure";

async function generateJwt(user) {
  const token = await jwt.sign(
    {
      userId: user.id,
    },
    secretKey
  );
  console.log(token);
  return token;
}

const authenticate = async function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Bearer Token
  const token = req.headers.authorization.split(" ")[1];

  let decoded;

  try {
    decoded = await jwt.verify(token, secretKey);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  if (decoded) {
    request.userId = decoded.userId;
    next();
  }
};

router.use((req, res, next) => {
  console.log("api router");
  next();
});

router.get("/jwt", async (req, res) => {
  const token = await generateJwt({ id: 1 });

  res.json({
    id: 1,
    jwt: token,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({
      message: "No user found with that email",
    });
  }

  let match;

  try {
    match = await bcrypt.compare(password, user.password);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  let jwt;

  try {
    jwt = await generateJwt(user);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }

  res.json({ jwt });
});

router.get("/users", authenticate, async (req, res) => {
  console.log(req.userId);
  // if (!req.headers.authorization) {
  //   return res.status(401).json({
  //     message: "Unauthorized",
  //   });
  // }

  // // Bearer Token
  // const token = req.headers.authorization.split(" ")[1];

  // console.log("token", token);
  // let decoded;

  // try {
  //   decoded = await jwt.verify(token, secretKey);
  //   console.log(decoded);
  // } catch (err) {
  //   return res.status(500).json({
  //     message: err.message,
  //   });
  // }

  // if (decoded) {
  return res.json({
    data: users,
  });
  // }
});

router.get("/task", (req, res) => {
  res.json({
    data: [],
  });
});
module.exports = router;
