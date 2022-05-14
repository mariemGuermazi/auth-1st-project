import { CLEARERRORS, CURRENT, FAIL, LOAD, LOGIN, LOGOUT, REGISTER } from "../types/authTypes"
import axios from 'axios'



export const register=(newUser,history)=>async(dispatch)=>{
    dispatch({type:LOAD})
try {
    const res=  await  axios.post('http://localhost:5901/api/user/register', newUser)

    dispatch({type:REGISTER, payload:res.data})  // {msg,user,token}

    history.push('/Profile')

} catch (error) {
    dispatch({type:FAIL, payload: error.response.data})
    
}
}

export const login=(user,history)=>async(dispatch)=>{

dispatch({type:LOAD})

    try {
        const res= await axios.post('http://localhost:5901/api/user/login',user)
        dispatch({type:LOGIN, payload:res.data}) // msg,found(user),token
        // console.log(res.data.found)
    
            history.push('/Profile')
        
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})
        // error.response.data.errors.map(el=>  alert(el.msg))
    }
}

export const current=()=>  async (dispatch)=>{
    const config={

        headers:{
            Authorization: localStorage.getItem('token')
        }

    }
    try {
        const res= await axios.get('http://localhost:5901/api/user/current',config)
        dispatch({type:CURRENT,  payload: res.data.user})

    } catch (error) {
        console.log(error)
    }
}

export const logout=()=>{
    return {type:LOGOUT}
}
export const clearerrors=()=>{
    return {type:CLEARERRORS}
}

//export const getUserInfo =(res)=>{
    //dispatch({type: LOAD})
    //try {
    //    const res = await axios.get('http://localhost:5901/api/user/current')
      //  dispatch({
       // type:GET_USER, 
      //  payload: {
       //     user: res.data,
       //     isAdmin :res.data.role === 1 ? true : false 
       // }
       // })
   // } catch (error) {
  //      console.log(error)
  //  }
//}