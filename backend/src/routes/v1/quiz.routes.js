const express = require("express");
const { quizCreation } = require("../../controller/quizController");
const {userAuth} = require('../../middleware/authMiddleware')
const router = express.Router();

router.route("/").post([userAuth],quizCreation);
router.route("/quiz").get();

module.exports = router;
