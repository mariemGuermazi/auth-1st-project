import { FAIL_USER, GET_ALL_USER, LOAD_USER } from "../types/userTypes";

const initialState={
    users:[],
    load:false,
    auth:false,
    error:null
}

const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case LOAD_USER:
            return{...state,load:true}
        case GET_ALL_USER:
            return {...state, load:false, users:action.payload.users };
        case FAIL_USER:
            return {...state,error:action.payload.error,load:false}
        default:
            return state
    }
}

export default userReducer