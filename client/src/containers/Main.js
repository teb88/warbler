import React from "react";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

const Main = props => {

    const { currentUser, authUser, errors, removeError } = props; 

    const extraProps = {
      onAuth: authUser,
      errors,
      removeError
    };
    
    return (        
        <div className="container">
            <Switch>
                <Route exact path="/" render={p => homePageWithProps({...p, currentUser })} />                
                <Route exact path="/signin" render={p => signInAuthForm({ ...p, ...extraProps })} />
                <Route exact path="/signup" render={p => signUpAuthForm({ ...p, ...extraProps })} />
            </Switch>
        </div>
    )
}

function homePageWithProps(props){
    return <Homepage {...props} />
}

function signInAuthForm(props){    
    return <AuthForm {...props} heading="Welcome Back" buttonText="Sign in!" /> 
}
function signUpAuthForm(props){   
    return <AuthForm {...props} signUp heading="Welcome!" buttonText="Sign up!" /> 
}


export default connect(state=> state, { authUser, removeError })(Main);