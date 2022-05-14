import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({component,...rest}) => {

    const token=localStorage.getItem('token')
    const role=localStorage.getItem('role')
  return (
    <div>
        
        {token && ( role === 1) ?   <Route component={component}  {...rest} /> :<Redirect to='/login'  />  }

    </div>
  )
}

export default AdminRoute