const mongoose = require("mongoose");
const User = require("../models/user");

const { createQuiz, getQuiz } = require("../repositories/quizRepo");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const quizCreation = async (req, res) => {
  try {
    const quiz = await createQuiz(req);
    const user = req.user;
    console.log(quiz);
    const id = quiz._id;
    const quizTitle = quiz.quizTitle;

    user.Quizes.push({
      _id: id,
      QuizTitle: quizTitle,
    });

    await user.save();
    return res.json(new ApiResponse(201, quiz, "Quiz Saved Successfully"));
  } catch (error) {
    return res.status(400).json(new ApiResponse(404, error, error.message));
  }
};

const quizfetch = async (req, res) => {
  try {
    const quiz = await getQuiz();
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json(quiz);
  } catch (error) {
    return res.status(404).json(new ApiResponse(404, error, error.message));
  }
};
module.exports = { quizCreation ,quizfetch};
