import React from 'react';
import '../styles/App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "../store";
import { setAuthToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();
const token = localStorage["jwt"];

if (token){
    try {
        const { _id, username, profileImageUrl } = jwtDecode(token);
        const user = { _id, username, profileImageUrl };
        store.dispatch(setCurrentUser(user))
        setAuthToken(token);
    } catch (err){
        console.log("err", err)
    }
}

function App() {
  return (    
        <Provider store={store}>
            <BrowserRouter>
                <div className="onboarding">
                    <Navbar />
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>    
  );
}

export default App;
