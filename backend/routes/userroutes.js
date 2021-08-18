const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post("/registerUser",userController.registerUser);

router.get("/listUser",userController.listUsers);

module.exports = router;