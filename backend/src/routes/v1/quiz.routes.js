const express = require('express')

const router = express.Router();

router.route("/quiz").post();
router.route("/quiz").get();

module.exports = router;