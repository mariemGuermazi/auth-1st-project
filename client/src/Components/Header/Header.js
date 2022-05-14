import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/authAction';
import './Header.css';


const Header = () => {

    const auth = useSelector(state => state.authReducer.auth)
    const dispatch= useDispatch()

  return (
    <header>
      <Navbar>
                <Container>
                <Navbar.Brand href="/">
                    <img alt="" src="https://bibliosmile.com/wp-content/uploads/2021/12/ya-book-reviews-pastel-icon.svg" 
                    width="30" height="30" className="d-inline-block align-top"/>
                    {' '}
                    BOOKVIEW
                </Navbar.Brand>
                
                <Navbar.Toggle />
         {auth? 
              <div>
                
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Link to="/login"><Button variant="outline-info" className='LogIn' onClick={()=>dispatch(logout())}>Log out</Button></Link>
                </Navbar.Text>
                </Navbar.Collapse>
                

              </div> : 
              <div>
              
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Link to="/login"><Button variant="outline-info" className='LogIn'>Log in</Button></Link>
                <Link to="/register"><Button variant="outline-info">Register</Button></Link>
                </Navbar.Text>
                </Navbar.Collapse>
               
                </div>}

                
                </Container>
                </Navbar>
    </header>
  )
}

export default Header