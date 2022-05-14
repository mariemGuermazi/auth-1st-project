import axios from "axios";
import { FAIL_USER, GET_ALL_USER, LOAD_USER } from "../types/userTypes";

export const getAllUsers = () => async(dispatch) => {
    dispatch({ type: LOAD_USER});
    try {
        let res= await axios.get("http://localhost:5901/api/user//AllUsersInfos");
        dispatch({type : GET_ALL_USER, payload : res.data})
        console.log(res)
    } catch (error) {
        dispatch({type : FAIL_USER, error});
        
    }

};