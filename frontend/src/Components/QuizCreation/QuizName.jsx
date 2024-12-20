import InputBox from "./InputBox";
import { setQuizName } from "../../reducer/quizSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const QuizName = () => {
  const dispatch = useDispatch();
  const [quizName,setQuizName] = useState("")
  const onBlurHandler = (e) => {
    dispatch(setQuizName(quizName));
  };
  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value); 
  };

  return (
    <>
      <InputBox
        type="text"
        value={quizName}
        onChange={handleQuizNameChange} 
        onBlurHandler={onBlurHandler} 
  
        label="Quiz Title"
        placeholder="Enter the Quiz Name"
      />
    </>
  );
};
export default QuizName;
