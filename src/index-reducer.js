import { combineReducers } from  'redux'
import { reducer  as  form } from  'redux-form'
import  user from  './user/reducer'
import  register from  './register/reducer'

const  IndexReducer  =  combineReducers({
       register,
       user,
       form
})
export  default  IndexReducer