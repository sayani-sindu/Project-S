import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Game from "../pages/Game";
import PageNotFound from "../Components/PageNotFound";
import { useSelector } from "react-redux";
import store from "../Store.js/Store";
const RoutersContainer = () => {
  let isLoggedIn = useSelector((store) => {
    return store.isLoggedIn;
  });
  return (
    <>
      <Routes>
        <Route path="/" element= {isLoggedIn?<Home/>:<SignIn/>} />
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Game" element={<Game />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RoutersContainer;
