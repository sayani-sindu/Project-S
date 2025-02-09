import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { createSocketConnection } from "../services/socketservice";

const JoinQuiz = () => {
  const [quizCode, setQuizCode] = useState({
    pin: "",
    name: "",
  });
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState(null);  
  const [joining, setJoining] = useState(false);  

  useEffect(() => {
    const socketConnection = createSocketConnection();
    setSocket(socketConnection);

    
    socketConnection.onPlayerJoined((response) => {
      if (response.success) {
        console.log("Successfully joined the quiz");
       
      } else {
        setError("Failed to join the quiz. Please check the quiz code.");
      }
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const handleJoinQuiz = () => {
    if (!socket) return;

    setJoining(true);
    setError(null);  // Reset any previous errors

    // Emit the join-game event with the quiz pin and user name
    socket.joinGame(quizCode.pin, { username: quizCode.name });

    // We don't need to manually remove listeners anymore because it’s handled inside the `useEffect`
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
          name="pin"
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

      {error && (
        <Typography color="error" className="text-center">
          {error}
        </Typography>
      )}

      <Button
        variant="solid"
        onClick={handleJoinQuiz}
        disabled={quizCode.pin.length < 5 || joining}
        fullWidth
      >
        {joining ? "Joining..." : "Join Quiz"}
      </Button>
    </Box>
  );
};

export default JoinQuiz;
