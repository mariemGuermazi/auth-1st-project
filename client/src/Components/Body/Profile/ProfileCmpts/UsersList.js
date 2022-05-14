import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../redux/actions/userAction';
import { Table,Button, ButtonGroup } from 'react-bootstrap'


const UsersList = () => {
    const dispatch = useDispatch();
    
    const users = useSelector((state) => state.userReducer.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>username</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            <tbody>
                {users.map((user) =><tr>
                    <td>{user._id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                
                <ButtonGroup size="sm">
                    <Button>Edit</Button>
                    <Button variant="danger">Delete</Button>
                </ButtonGroup>
                </tr>)}

            </tbody>
        </Table>
    </div>
)
}

export default UsersList