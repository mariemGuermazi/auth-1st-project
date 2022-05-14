import React from 'react'
import { Alert } from 'antd';
//import './Notification.css'

const Notification = ({msg}) => {
  return (
    <div>
        <Alert
      message="Error"
      description={msg}
      type="error"
      showIcon
    />
    </div>
  )
}

export default Notification



