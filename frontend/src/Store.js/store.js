import { legacy_createStore as createStore,combineReducers } from "redux";
import loginReducer from "../reducer/loginreducer";
import quizReducer from "../reducer/quizReducer";
const store = createStore(combineReducers({ loginReducer,
   quizReducer


}));
export default store;
