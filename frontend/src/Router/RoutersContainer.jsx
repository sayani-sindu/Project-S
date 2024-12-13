import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Game from "../pages/Game";
import PageNotFound from "../Components/PageNotFound";
const RoutersContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Game" element={< Game />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RoutersContainer;
