import {AUTH_USER,CLEAR_USER} from '../ActionTypes/AuthUser'

const initialState={
    auth:JSON.parse(localStorage.getItem('authorization.user'))?JSON.parse(localStorage.getItem('authorization.user')):null
}


const UserReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case AUTH_USER:return{
            auth:JSON.parse(localStorage.getItem('authorization.user'))
        }
        case CLEAR_USER:return{
            auth:null
        }
        default: return state
    }
}


export default UserReducer