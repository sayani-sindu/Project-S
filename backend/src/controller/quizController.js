const mongoose = require('mongoose');
const User = require('../models/user');

const createQuiz = require('../repositories/quizRepo');
const { ApiError} = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');

const postQuestion = async(req, res) => {
    try{
        const quiz = await createQuiz( req );
        const user = req.user;
        
        const id = quiz._id;
        
        user.Quizes.push(id);
        await user.save();

        

    }
    catch(error){
        throw new ApiError(500, "Server Error");
    }
}

module.exports = postQuestion;