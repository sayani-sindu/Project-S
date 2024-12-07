import { Link } from "react-router-dom";
function Navigation() {
    return (
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/Game"className="m-3">Games</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">Sign Out</Link>
      </nav>
    );
  }
  export default Navigation;