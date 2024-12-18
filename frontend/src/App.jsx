import "./App.css";
import RoutersContainer from "./Router/RoutersContainer.jsx";
import { Provider, useSelector } from "react-redux";
import Navigation from "./Components/Navigation.jsx";
import store from "./Store.js/Store.js";

function App() {
  let isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  //const [count, setCount] = useState(0)

  return (
    <>
      {isLoggedIn ? <Navigation /> : null}

      <RoutersContainer />
    </>
  );
}

export default App;
