import {
  FormControl,
  FormLabel,
  Input,
  Typography,
  Box,
  Button,
} from "@mui/joy";
import InputBox from "../Components/QuizCreation/InputBox";
import QuestionAdding from "../Components/QuizCreation/QuestionsAdding";
import QuizGame from "./QuizGame";
import QuizName from "../Components/QuizCreation/QuizName";
import SubmitButton from "../Components/QuizCreation/SubmitButton";
import { useSelector } from "react-redux";
import React from "react";
const CreateQuiz = () => {
  const quiz = useSelector((state) => state.quiz);
  const token = localStorage.getItem("token");

  const handleClick = async (e) => {
    e.preventDefault();
    const { quizName, questions } = quiz;
    const data = { quizTitle: quizName, Questions: [] };

    questions.forEach((question) => {
      const obj = {
        question: question.question,
        options: [
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ],
        correctAns: correctAnswer,
      };
      data.Questions.push(obj);
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/quiz",
        data,
        {
          header: {
            Authorization: token,
          },
        }
      );
  } catch (error) {
    console.log(error);

  }
  };
  return (
    <>
      <Box className="max-w-3xl mx-auto p-4 space-y-4">
        <Typography variant="h4" className="text-center font-bold">
          Create a New Quiz
        </Typography>
        <QuizName />
        <QuestionAdding />

        <SubmitButton
          className="border border-gray-950"
          onClick={handleClick}
        ></SubmitButton>
      </Box>
    </>
  );
};
export default CreateQuiz;
