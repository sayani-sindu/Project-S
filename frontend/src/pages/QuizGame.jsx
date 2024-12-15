import { Button } from "@mui/joy";
import { Link, Outlet } from "react-router-dom";


const QuizGame = () => {
  return (
    <>
      <div className="">
        <Link to="create-quiz">
          <Button variant="solid" size="sm">
            Create Quiz
          </Button>
        </Link>
        <Link to="join-quiz">
       
          <Button variant="solid" size="sm">
            Join Quiz
          </Button>
        </Link>
        <Link to="start-quiz">
        <Button variant="solid" size="sm">
            Start Quiz
          </Button></Link>
      </div>
      <div><Outlet></Outlet></div>
    </>
  );
};
export default QuizGame;
