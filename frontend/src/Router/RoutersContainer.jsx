import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Game from "../pages/Game";
import PageNotFound from "../Components/PageNotFound";
import { useSelector } from "react-redux";
import store from "../Store.js/Store";
import QuizGame from "../pages/QuizGame";
import CreateQuiz from "../pages/CreateQuiz";
import JoinQuiz from "../pages/JoinQuiz";
import StartQuiz from "../pages/StartQuiz";
const RoutersContainer = () => {
  let isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <SignIn />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/Game" element={<Game />}></Route>
        <Route path="/Quiz" element={<QuizGame />}>
          <Route path="create-quiz" element={<CreateQuiz />} />
          <Route path="join-quiz" element={<JoinQuiz />} />
          <Route path="start-quiz" element={<StartQuiz />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RoutersContainer;
