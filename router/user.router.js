const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const controller = require("../controller/user.controller");

router.post("/register", controller.register);

router.get("/login", controller.login);

router.get("/profile", auth, controller.profile);

module.exports = router;
