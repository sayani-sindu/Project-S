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
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Game" className="m-3">
        Games
      </Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Create Account</Link>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};
export default Navigation;
