import errors from "./error";
import currentUser from "./currentUser";
import { combineReducers } from "redux";
import messages from "./messages";

export const rootReducer = combineReducers({ errors, currentUser, messages })