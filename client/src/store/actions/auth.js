import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user    
    }
}

export function logOut(){
    return dispatch =>{
        localStorage.clear();
        dispatch(setCurrentUser({}));
    }
}

export function authUser(authType, userData){
    return async (dispatch) =>{
        const data = await apiCall("post", `/api/auth/${authType}`, userData)
            .catch(err => {        
                dispatch(addError(err.message))})                
        
        if (!data) return false;
        
        const { token, ...user } = data;
        localStorage.setItem("jwt", token);
        dispatch(setCurrentUser(user));
        dispatch(removeError());
        return true;
    }
}