import { Avatar } from 'antd'
import React from 'react'
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './Profile.css';
import UsersList from './ProfileCmpts/UsersList';



const Profile = () => {

  const role=localStorage.getItem('role')

  const user = useSelector(state => state.authReducer.user)

  
  return (
    <div>
      <Row className='Profile'>
      <Col sm={4} className='Profile-Info'>
        <Avatar size={125} src={user.avatar} />
        
        <h3>{user.username}</h3>
        <p className='Profile-text'>Email: {user.email}</p>
        <p className='Profile-text'>About: {user.about}</p>
        <Button variant="outline-dark">Edit</Button>
        
      </Col>
      <Col sm={8}>
      { (role == 1) ? 
      <div className='Profile-Info'>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Books">
            
          </Tab>
          <Tab eventKey="profile" title="Users">
            <UsersList/>
          </Tab>
        </Tabs>
        
      </div>
      :
      <div>
        <h1>this is the user profile</h1>
        
      </div>
}
      </Col>
    
  </Row>

    </div>
  )
}

export default Profile