import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import axios from "axios";

const JoinQuiz = () => {
  const [quizCode, setQuizCode] = useState({
    pin: "",
    name: "",
  });

  const handleJoinQuiz = () => {
   const response = axios.post("http://localhost:8000/join-quiz", quizCode);
    
  };
  const onchangeHandler = (e) => {
    setQuizCode({ ...quizCode, [e.target.name]: e.target.value });
  };

  return (
    <Box className="max-w-sm mx-auto p-4 space-y-4">
      <Typography variant="h4" className="text-center font-bold">
        Join a Quiz
      </Typography>

      <FormControl className="mb-5">
        <FormLabel>Enter Quiz Code</FormLabel>
        <Input
          onChange={onchangeHandler}
          name="Pin"
          type="number"
          placeholder="Please Enter your Pin"
        />
      </FormControl>
      <FormControl className="mb-5">
        <FormLabel>Name</FormLabel>
        <Input
          onChange={onchangeHandler}
          name="name"
          type="text"
          placeholder="Please Enter your Name"
        />
      </FormControl>

      <Button
        variant="solid"
        onClick={handleJoinQuiz}
        disabled={quizCode.length < 5}
        fullWidth
      >
        Join Quiz
      </Button>
    </Box>
  );
};

export default JoinQuiz;
