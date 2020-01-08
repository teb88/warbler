import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export function addError(err){
    return {
        type: ADD_ERROR,
        err
    }
}

export function removeError(){
    return {
        type: REMOVE_ERROR
    }
}