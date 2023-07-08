import { AUTH_ADMIN, CLEAR_ADMIN } from "../ActionTypes/AuthAdmin"

const initialState={
    auth:JSON.parse(localStorage.getItem('authorization.admin'))?JSON.parse(localStorage.getItem('authorization.admin')):null
}


const AdminReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case AUTH_ADMIN:return{
            auth:JSON.parse(localStorage.getItem('authorization.admin'))
        }
        case CLEAR_ADMIN:return{
            auth:null
        }
        default: return state
    }
}

export default AdminReducer