const express = require('express');

const router = express.Router();

const rolController = require('../controllers/rolcontroller');


router.post("/registerRol",rolController.registerRole);

router.get("/listRoles",rolController.listRoles);


module.exports = router;