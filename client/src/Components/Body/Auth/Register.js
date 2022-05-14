import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../../../redux/actions/authAction';
import {Form, Button, Modal} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { Alert } from 'antd';
import './Auth.css';


const Register = () => {
  const [newUser, setNewUser] = useState({});
    const dispatch = useDispatch()
    const errors=useSelector(state=>state.authReducer.errors)

    const history=useHistory()
  
    const handleChange = (e) => {
      setNewUser({...newUser, [e.target.name]: e.target.value})
    }


    
    return (
    <div className='auth-Style'> 
      <Modal.Title>Register</Modal.Title>

      {errors && errors.map(el=> <Alert message={el.msg} type="error" showIcon />)}

      <Form >
      <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username"  name="username" onChange={handleChange} />
          </Form.Group>
 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  name="email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
          </Form.Group>
          <Button variant="info" type="submit" 
          onClick={(e) => {
            e.preventDefault();
            dispatch(register(newUser, history))
            }}>
            Register
          </Button>
      </Form>
    </div>
  )
}

export default Register