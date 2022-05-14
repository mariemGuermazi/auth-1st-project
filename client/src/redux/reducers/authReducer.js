import { CLEARERRORS, CURRENT, FAIL, GET_USER, LOAD, LOGIN, LOGOUT, REGISTER } from "../types/authTypes"

const initialState={
    user:{},
    load:false,
    auth:false,
    errors:null
}

const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOAD:
            return{
            ...state,load:true
        }
        case REGISTER:
        localStorage.setItem('token',action.payload.token )
            return {...state,load:false,user:action.payload.user,auth:true}

        case LOGIN:
        
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('role',action.payload.user.role)
            return {...state, load:false, auth:true, user:action.payload.user}
        case CURRENT: 
            return {...state, auth:true,user:action.payload   }
        case FAIL:
            return {...state,errors:action.payload.errors,load:false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            return {...state, user:null, errors:null, auth:false}
        case CLEARERRORS: 
            return {...state,errors:null}
        case GET_USER:
            return {
                ...state,
                user: action.payload.user}
        default:
            return state
    }
}

export default authReducer