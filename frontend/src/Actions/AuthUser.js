import {AUTH_USER,CLEAR_USER} from '../ActionTypes/AuthUser'

export  const authUser=()=>{
    return{
        type:AUTH_USER
    }
}

export  const clearUser=()=>{
    return{
        type:CLEAR_USER
    }
}

