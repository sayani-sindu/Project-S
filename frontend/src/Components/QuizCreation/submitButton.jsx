import { Button } from "@mui/joy";
import axios from "axios";
import { useSelector } from "react-redux";

const SubmitButton = () => {
  const quiz = useSelector((state) => state.quiz);
  const token = useSelector((state) => state.auth.token);

  const handleClick = async (e) => {
    e.preventDefault();
    const { quizName, questions } = quiz;
    if (!quizName || !questions || questions.length === 0) {
      console.log("Please fill in quiz name and questions.");
      return;
    }

    const data = {
      quizTitle: quizName,
      Questions: questions.map((question) => ({
        question: question.question,
        options: [
          question.option1,
          question.option2,
          question.option3,
          question.option4,
        ],
        correctAns: question.correctAnswer,
      })),
    };
    try {
      console.log(token);
      const response = await axios.post(
        "http://127.0.0.1:3000/api/v1/quiz",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Quiz created successfully:", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </>
  );
};
export default SubmitButton;
