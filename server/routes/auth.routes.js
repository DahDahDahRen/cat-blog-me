const express = require("express");
const validateRegister = require("../middleware/validateRegister");
const {
  registerAccount,
  loginController,
} = require("../controller/auth.controller");
const router = express.Router();

//! Create Account
router.post("/register", validateRegister, registerAccount);

//! Login Account
router.post("/login", loginController);

module.exports = router;
