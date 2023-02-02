import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddUser } from '../Redux/UserSlice'

const AddUsers = () => {
  const navigate = useNavigate()
  const msg = useSelector(state=> state.User.msg)
  const [newUser, setNewUser] = useState({})
  const HandleChange = (e)=>{
     setNewUser({...newUser, [e.target.name]: e.target.value })
  }
  const dispatch = useDispatch()
  return (
    <div>
      <Form.Control onChange={HandleChange} name='name' type="text" placeholder="Enter your name" />
      <Form.Control onChange={HandleChange} name='age' type="number" placeholder="Enter your age" />
      <Form.Control onChange={HandleChange} name='email' type="email" placeholder="Enter email" />
      <Form.Control onChange={HandleChange} name='password' type="password" placeholder="Enter your password" />
      <Button onClick={()=>{ dispatch(AddUser(newUser));
                              navigate('/users')
      
      }} variant='primary'>Add a User</Button>
      { msg && <Alert  variant={'danger'} >{msg}</Alert>}
    </div>
  )
}

export default AddUsers