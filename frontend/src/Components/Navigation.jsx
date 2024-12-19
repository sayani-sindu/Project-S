import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    navigate('/')
    let actionObj = {
      type:'LOGOUT',
      payload: false,
    }
    dispatch(actionObj);
  };
  return (
    <nav className="m-4 p-2 box-border border  ">
      <Link to="/">Home</Link>
      <Link to="/Game" className="m-3">
        Games
      </Link>
      <Link to="/signin" className="m-2">Sign In</Link>
      <Link to="/signup" className="m-2">Create Account</Link>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};
export default Navigation;
