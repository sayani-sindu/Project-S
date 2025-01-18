import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Game from "../pages/Game";
import PageNotFound from "../Components/PageNotFound";
import QuizGame from "../pages/QuizGame";
import CreateQuiz from "../pages/CreateQuiz";
import JoinQuiz from "../pages/JoinQuiz";
import StartQuiz from "../pages/StartQuiz";
import { useSelector } from "react-redux";  // Import useSelector to access auth state

const RoutersContainer = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);  // Get auth state from Redux

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes */}
      <Route 
        path="/game" 
        element={isLoggedIn ? <Game /> : <Navigate to="/signin" />} 
      />
      <Route 
        path="/quiz" 
        element={isLoggedIn ? <QuizGame /> : <Navigate to="/signin" />} 
      />
      <Route 
        path="/quiz/create-quiz" 
        element={isLoggedIn ? <CreateQuiz /> : <Navigate to="/signin" />} 
      />
      <Route 
        path="/quiz/join-quiz" 
        element={isLoggedIn ? <JoinQuiz /> : <Navigate to="/signin" />} 
      />
      <Route 
        path="/quiz/start-quiz" 
        element={isLoggedIn ? <StartQuiz /> : <Navigate to="/signin" />} 
      />

      {/* Catch-all Route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutersContainer;
