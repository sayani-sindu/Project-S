const mongoose = require('mongoose')
const { trim } = require('validator')

const quizSchema = new mongoose.Schema({
    quizTitle:{
        type: String,
        required: true,
        maxLength: 50,
        lowercase: true, 
        trim: true
    },
    Questions:[{
        question:{
            type: String,
            required: true,
            maxLength: 100,
            lowercase: true,
            trim: true
        },
        options: {
            type: Array,
            required: true,
            maxLength: 4,
            lowercase: true,
            trim: true
        },
        correctAns: {
            type: String,
            required: true,
            maxLength: 20,
            lowercase: true,
            trim: true
        }
    }]
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
<<<<<<< HEAD
=======

>>>>>>> 4ce24f91231474534673227f58fde4b6d5cfd5ba
