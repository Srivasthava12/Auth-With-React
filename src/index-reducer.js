import { combineReducers } from  'redux'
import { reducer  as  form } from  'redux-form'
import  user from  './user/reducer'
import  register from  './register/reducer'
import login from './login/reducer'
import forgotPassword from './forgotpassword/reducer'
import changePassword from './changepassword/reducer'
import resetPassword from './resetpassword/reducer'

const  IndexReducer  =  combineReducers({
       register,
       login,
       user,
       forgotPassword,
       changePassword,
       resetPassword,
       form
})
export  default  IndexReducer