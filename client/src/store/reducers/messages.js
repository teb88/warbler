import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export default function(state=[], action){
    switch(action.type){
        case LOAD_MESSAGES:
            return [ ...action.messages ]
        case REMOVE_MESSAGE:
            const messages = state.filter(m => m._id !== action.id);
            return [ ...messages ]
        default:
            return state;
    }
}