import { combineReducers } from  'redux'
import { reducer  as  form } from  'redux-form'
import  user from  './user/reducer'
import  register from  './register/reducer'
import login from './login/reducer'

const  IndexReducer  =  combineReducers({
       register,
       login,
       user,
       form
})
export  default  IndexReducer