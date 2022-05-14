import React, { useState } from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authAction';
import { useHistory } from 'react-router-dom';
import { Alert } from 'antd';


const LogIn = () => {
  

 const [user, setUser] = useState({});
  const dispatch = useDispatch()
  const history=useHistory()

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})

  }

  const errors=useSelector(state=>state.authReducer.errors)



  return (
    <div className='auth-Style'>
      <Modal.Title>LOGIN</Modal.Title>
      {errors && errors.map(el=> <Alert message={el.msg} type="error" showIcon />)}
      <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange}/>
          </Form.Group>
          <Button variant="info" type="submit" 
          onClick={(e) =>{
            e.preventDefault();
            dispatch(login(user, history))}
            }>
            Log in
          </Button>
      </Form>
    </div>
  )
}

export default LogIn