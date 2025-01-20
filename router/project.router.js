const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
const controller = require("../controller/project.controller");

router.post('/createProject',auth,controller.createProject)

router.get('/getProject',auth,controller.getProject)

router.get('/getProjects/:id',auth,controller.getProjects)

router.put('/updateProject',auth,controller.updateProject)

router.delete('/deleteProject',auth,controller.deleteProject)

module.exports = router;
