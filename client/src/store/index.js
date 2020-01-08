import { rootReducer } from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import Thunk from "redux-thunk";

export function configureStore(){ 
    return createStore(rootReducer, compose(
        applyMiddleware(Thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))}