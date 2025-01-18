import { Button, Box, Typography } from "@mui/joy";
import { Add } from "@mui/icons-material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import React from "react";
import { setQuestions } from "../../reducer/quizSlice.js";
import { useDispatch, useSelector } from "react-redux";
import QuestionOptions from "./QuestionsOptions.jsx";
const QuestionAdding = () => {
  const questions = useSelector((state) => state.quiz.questions);

  const dispatch = useDispatch();

  const handleAddQuestion = () => {
    const newQuestion = {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctOption: "",
    };
    dispatch(setQuestions([...questions, newQuestion]));
  };

  const handleRemoveLastQuestion = () => {
    if (questions.length > 0) {
      dispatch(setQuestions(questions.slice(0, -1)));
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    console.log(index)
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    console.log(updatedQuestions)
    console.log(updatedQuestions[index])
    dispatch(setQuestions(updatedQuestions));
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="solid"
          onClick={handleAddQuestion}
          startDecorator={<Add />}
          size="sm"
        >
          Add Question
        </Button>

        <Button
          variant="solid"
          onClick={handleRemoveLastQuestion}
          startDecorator={<RemoveOutlinedIcon />}
          size="sm"
        >
          Remove Question
        </Button>
        <Typography level="h4">Number of Questions: </Typography>
        {questions.map((question, index) => (
          <QuestionOptions
            key={index}
            index={index}
            question={question}
            onChange={handleQuestionChange} // Pass the handler to update question data
          />
        ))}
      </Box>
    </>
  );
};
export default QuestionAdding;
