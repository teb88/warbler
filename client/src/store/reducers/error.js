import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const defaultError = {
    message: null
}

export default function (state=defaultError, action){
    switch(action.type){
        case ADD_ERROR:
            return { ...state, message: action.err }
        case REMOVE_ERROR:
            return { ...state, message: null }
        default: 
            return state;
    }
}