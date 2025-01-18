import { Button } from "@mui/joy";
import axios from "axios";
import { useSelector } from "react-redux";

const SubmitButton = () => {
  const quiz = useSelector((state) => state.quiz);
  const token = useSelector((state) => state.auth.token);

  const onClick = (e) => {
    
    event.preventDefault;
    const { quizName, questions } = quiz;
    console.log(quizName)
    console.log(questions)
    const response = axios.post("",{quizName,questions} ,{
      headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization":token
      }})
  };

  return (
    <>
      <Button variant="contained" onClick={onClick}>
        Submit
      </Button>
    </>
  );
};
export default SubmitButton;
