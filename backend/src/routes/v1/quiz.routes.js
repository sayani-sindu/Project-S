const express = require('express')

const router = express.Router();

router.route("/post-question").post();
router.route("/get-question").get();

module.exports = router;