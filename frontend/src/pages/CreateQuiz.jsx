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
import SubmitButton from "../Components/QuizCreation/submitButton";
const CreateQuiz = () => {
  return (
    <>
      <Box className="max-w-3xl mx-auto p-4 space-y-4">
        <Typography variant="h4" className="text-center font-bold">
          Create a New Quiz
        </Typography>
        <QuizName />
        <QuestionAdding />
        <SubmitButton className="border border-gray-950"></SubmitButton>
      </Box>
    </>
  );
};
export default CreateQuiz;
