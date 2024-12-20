import { Button, Box, Typography } from "@mui/joy";
import { Add } from "@mui/icons-material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import React from "react";
import { setQuestions } from "../../reducer/quizSlice.js";
import { useDispatch, useSelector } from "react-redux";
import QuestionOptions from "./QuestionsOptions.jsx"
const QuestionAdding = () => {
  const questions = useSelector((state) => state.quiz.questions);

  const handleAddQuestion = () => {
    
    const newQuestions = [
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ];
    dispatch(setQuestions(newQuestions));
  };
  const handleRemoveQuestion = () => {
    if (questions.length > 0) {
      const newQuestions = questions.slice(0, -1); 
      dispatch(setQuestions(newQuestions)); 
    }
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
          onClick={handleRemoveQuestion}
          startDecorator={<RemoveOutlinedIcon />}
          size="sm"
        >
          Remove Question
        </Button>
        <Typography level="h4">Number of Questions: {count}</Typography>
        {questions.map((question, index) => (
        <QuestionOptions
          key={index}
          index={index}
          question={question}
          onQuestionChange={handleQuestionChange} // Pass the handler to update question data
        />
      ))}

      </Box>
    </>
  );
};
export default QuestionAdding;
