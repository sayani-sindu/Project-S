import { legacy_createStore as createStore } from "redux";
import loginReducer from "../reducer/loginreducer";
const store = createStore(loginReducer);
export default store;
