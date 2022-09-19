const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const userModel = require("../model/user");

const auth = require("../middleware/auth");

const secret = "RESTAPI";

// Middlewares
router.use(express.urlencoded());
router.use(bodyParser());

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
dotenv.config();

router.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    if (!(email && password && confirmpassword)) {
      res.status(400).send("All input is required");
    }
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    if (password === confirmpassword) {
      const user = await userModel.create({
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      res.json({
        status: "sucess",
        message: "SignUp successful",
        user,
      });
    } else {
      res.json({
        status: "failed",
        message: "password mismatch",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const data = await userModel.findOne({ email });
    if (!data) {
      return res.status(400).json({
        status: "failed",
        message: "User is not registerd",
      });
    } else {
      if (!bcrypt.compareSync(password, data.password)) {
        res.json({
          status: "failed",
          message: "wrong password",
        });
      } else {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: data._id,
          },
          process.env.TOKEN_KEY
        );

        res.json({
          status: "Sucess",
          token,
        });
      }
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/logout", auth, function (req, res) {
  const authHeader = req.headers["x-access-token"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});

router.get("*", (req, res) => {
  res.status(404).json({
    status: "Failed",
    message: "API NOT FOUND",
  });
});

module.exports = router;
