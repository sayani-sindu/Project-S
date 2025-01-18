const Quiz = require("../models/quiz");
const { ApiError } = require("../utils/ApiError");

const createQuiz = async ( req ) => {
    try{
        const newQuiz = await Quiz.create({
            quizTitle: req.body.quizTitle,
            Questions: req.body.Questions
        })
        return newQuiz;
    }
    catch(error){
        throw new ApiError(500, "Error Creating Question" + error.message);
    }

}
const getQuiz = async () => {
    try {
      const quizzes = await Quiz.find();
      return quizzes;
    } catch (error) {
      throw new ApiError(500, "Error Fetching Quizzes: " + error.message);
    }
 };
 
module.exports = {createQuiz,getQuiz};
