const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');


router.post("/posting",postController.publish);
router.get("/listpost/:text?",postController.listpublished);
module.exports = router;