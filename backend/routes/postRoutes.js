const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');


router.post("/posting",postController.publish);

module.exports = router;