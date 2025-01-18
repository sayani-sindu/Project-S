import "./App.css";
import RoutersContainer from "./Router/RoutersContainer.jsx";
import { Provider, useSelector } from "react-redux";
import Navigation from "./Components/Navigation.jsx";
import store from "./Store.js/Store.js";

function App() {

  return (
    <>

      <RoutersContainer />
    </>
  );
}

export default App;
