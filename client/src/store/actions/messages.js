import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";
import { apiCall } from "../../services/api";
import { addError, removeError } from "./errors";

function loadMessages(messages){
    return {
        type: LOAD_MESSAGES,
        messages
    }
}

function removeMessage(id){
    return {
        type: REMOVE_MESSAGE,
        id
    }
}

export const fetchAndLoadMessages = _ =>{
    return async (dispatch) =>{
        const res = await apiCall("get", "/api/user/_/messages")
            .catch(err=> { dispatch(addError(err.message)) });
        if (!res) return false;
        dispatch(removeError());
        dispatch(loadMessages(res));
    }
}

export const postNewMessage = text => 
    async (dispatch, getStatus) => {
        const { _id } = getStatus().currentUser.user;
        return apiCall("post", `/api/user/${_id}/messages`, { text })
            .then(res => {
                dispatch(removeError())
                return res;
            })
            .catch(err => { dispatch(addError(err.message)) })
    }

export const deleteMessage = (user_id, message_id) =>
    async dispatch =>
        apiCall("delete", `/api/user/${user_id}/messages/${message_id}`)
            .then(res => {                
                dispatch(removeError())
                dispatch(removeMessage(message_id))
                return res;
            })
            .catch(err => { 
                dispatch(addError(err.message))
                console.log(err);
                return false;
                })
            


    
