const express = require("express");
const { quizCreation, quizfetch } = require("../../controller/quizController");
const {userAuth} = require('../../middleware/authMiddleware')
const router = express.Router();

router.route("/").post([userAuth],quizCreation);
router.route("/").post([userAuth],quizfetch);

module.exports = router;
