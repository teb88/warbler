import errors from "./error";
import currentUser from "./currentUser";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ errors, currentUser })