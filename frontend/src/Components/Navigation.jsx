import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../reducer/authSlice";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <nav className="m-4 p-2 box-border border  ">

      <Link to="/">Home</Link>
      <Link to="/quiz/join-quiz">Join Quiz</Link>

      {isLoggedIn ? (
        <>
          <Link to="/Game" className="m-3">
            Games
          </Link>


          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/signin" className="m-2">
            Sign In
          </Link>
          <Link to="/signup" className="m-2">
            Create Account
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navigation;
