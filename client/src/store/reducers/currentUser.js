import { SET_CURRENT_USER } from "../actionTypes";

const defaultUser = {
    isAuthenticated: false,
    user: {}
}

export default function userReducer(state=defaultUser, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return { isAuthenticated: !!Object.keys(action.user).length, user: action.user }
        default:
            return state;
    }
}