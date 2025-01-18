import InputBox from "./InputBox";
import { setQuizName } from "../../reducer/quizSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const QuizName = () => {
  const dispatch = useDispatch();
  // const [quizName, setQuizNameState] = useState("");

  // Handle blur event and dispatch quiz name
  

  // Handle input value change
  const onChangeHandler = (e) => {
    const value = e.target.value; 
    // setQuizNameState(value);
    dispatch(setQuizName(value)); 
  };

  return (
    <InputBox
      type="text"
      // value={quizName}
      onChange={onChangeHandler}
     
      label="Quiz Title"
      placeholder="Enter the Quiz Name"
    />
  );
};

export default QuizName;
