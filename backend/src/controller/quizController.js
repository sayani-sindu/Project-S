const mongoose = require("mongoose");
const User = require("../models/user");

const createQuiz = require("../repositories/quizRepo");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const quizCreation = async (req, res) => {
  try {
    const quiz = await createQuiz(req);
    const user = req.user;

    const id = quiz._id;

    user.Quizes.push(id);
    await user.save();
    return res.json(new ApiResponse(201, quiz, "Quiz Saved Successfully"));
  } catch (error) {
     return res.status(400).json(new ApiResponse(404,error,error.message))
  }
};

module.exports = {quizCreation};
