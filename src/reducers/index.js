import { combineReducers } from "redux";
import counter from "./counter.js";
import logged from "./isLogged";

const rootReducer = combineReducers({ counter, logged });
export default rootReducer;
