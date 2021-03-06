import axios from "axios";

export function setTokenHeader(token){
    if (token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export async function apiCall(method, path, data){    
    return new Promise((resolve, reject)=>
        axios[method](process.env.REACT_APP_BASE_URL + path, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data.error))
    )  
}