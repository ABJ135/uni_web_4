const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const controller = require("../controller/project.controller");

router.post('/createProject',auth,controller.createProject)

module.exports = router;
