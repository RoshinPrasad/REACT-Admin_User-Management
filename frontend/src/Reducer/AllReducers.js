import {combineReducers} from 'redux'
import AdminReducer from './AdminReducer'
import UserReducer from './UserReducer'


const AllReducers=combineReducers({
    adminAuth:AdminReducer,
    userAuth:UserReducer
})

export default AllReducers