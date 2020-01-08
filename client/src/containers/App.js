import React from 'react';
import '../styles/App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "../store";

const store = configureStore();

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
