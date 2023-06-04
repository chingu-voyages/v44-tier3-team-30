const express = require("express");
const {
  userRegister,
  userLogin,
  getAllUsers,
} = require("../controllers/userController");

// router object
const router = express.Router();

// GET ALL USERS
router.get("/get-all-users", getAllUsers);

router.post("/register", userRegister);

router.post("/login", userLogin);

module.exports = router;
