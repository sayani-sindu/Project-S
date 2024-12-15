import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";

const JoinQuiz = () => {
  const [quizCode, setQuizCode] = useState("");

  const handleJoinQuiz = () => {
    // Handle joining the quiz with the entered quiz code
    console.log(`Joining quiz with code: ${quizCode}`);
  };

  return (
    <Box className="max-w-sm mx-auto p-4 space-y-4">
      <Typography variant="h4" className="text-center font-bold">
        Join a Quiz
      </Typography>

      <FormControl className="mb-5">
        <FormLabel>Enter Quiz Code</FormLabel>
        <Input
          onChange={(e) => setQuizCode(e.target.value)}
          name="Pin"
          type="text"
          placeholder="Please Enter your Pin"
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
