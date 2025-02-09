import React, { useEffect, useState } from "react";
import { Button, TextField, Box, Typography, Select, Option } from "@mui/joy";
import axios from "axios";
const StartQuiz = () => {
  
  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    console.log("Selected Quiz:", quiz);
  };
  
  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quiz/'); // Your API endpoint
      return response.data; // Return the quiz data
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      throw new Error('Failed to fetch quizzes');
    }
  };
  
  useEffect(
    ()=>{
      const quiz = fetchQuizzes();
      console.log(quiz)
      setQuizList(quiz)
    },[]
  )

  return (
    <>
      {" "}
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <Card>
          <Typography className="text-black text-center"> Sign In </Typography>
          <form action="">
            <FormControl>
              <FormLabel>Select Quiz</FormLabel>
              <Select defaultValue="">
                {quiz.map((ele,index)=>{<Option key={index}>ele.title</Option>})}
                
              </Select>
            </FormControl>


            <button
              className={isDisabled ? "disable" : "enable"}
              onClick={loginButtonHandler}
              disabled={isDisabled}
            >
              Sign In
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};
export default StartQuiz;
