import { Button, Box, Typography } from "@mui/joy";
import { Add } from "@mui/icons-material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import React from "react";
import QuestionOptions from "./QuestionsOptions.jsx"
const QuestionAdding = () => {
  let [count, setCount] = React.useState(0);

  const AddingQuestion = () => {
    
    setCount((prevCount) => prevCount + 1);
  };
  const RemoveQuestion = () => {
    if(count>0){
    setCount((prevCount) => prevCount - 1);}
  };
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="solid"
          onClick={AddingQuestion}
          startDecorator={<Add />}
          size="sm"
        >
          Add Question
        </Button>

        <Button
          variant="solid"
          onClick={RemoveQuestion}
          startDecorator={<RemoveOutlinedIcon />}
          size="sm"
        >
          Remove Question
        </Button>
        <Typography level="h4">Number of Questions: {count}</Typography>
        {Array(count).fill(<QuestionOptions/>)}
      </Box>
    </>
  );
};
export default QuestionAdding;
