import "./App.css";
import RoutersContainer from "./Router/RoutersContainer.jsx";
import { Provider, useSelector } from "react-redux";
import Navigation from "./Components/Navigation.jsx";
import store from "./Store.js/Store.js";
import { CssVarsProvider } from "@mui/joy/styles";
import theme from "./Theme.jsx";

const client = new Ably.Realtime({
  key: "jwYSsg.ZFlYgQ:eBlabnhsq69ysNELOaWzbxXzWbdN4ihmGnSgnbjzIkY",
});
function App() {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <RoutersContainer />
      </CssVarsProvider>
    </>
  );
}

export default App;
