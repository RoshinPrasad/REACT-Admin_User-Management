import {configureStore} from '@reduxjs/toolkit'
import AllReducers from '../Reducer/AllReducers'

const store=configureStore({reducer:AllReducers})


export default store