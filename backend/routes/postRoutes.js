const express = require('express');

const router = express.Router();

const Auth = require('../middleware/auth');

const Validate = require('../middleware/validate');

const postController = require('../controllers/postController');


router.post("/posting",Auth,Validate,postController.publish);
router.get("/listpost/:text?",Auth,Validate,postController.listpublished);
module.exports = router;