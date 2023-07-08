import {AUTH_ADMIN, CLEAR_ADMIN} from '../ActionTypes/AuthAdmin'

export  const authAdmin=()=>{
    return{
        type:AUTH_ADMIN
    }
}


export  const clearAdmin=()=>{
    return{
        type:CLEAR_ADMIN
    }
}
