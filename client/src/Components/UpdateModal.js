import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { UpdateDataUser } from '../Redux/UserSlice'

const UpdateModal = ({user}) => {
    const dispatch = useDispatch()
    const [updateUser, setUpdatedUser] = useState({
        _id : user._id
    })
    const HandleChange = (e)=>{
        setUpdatedUser({...updateUser, [e.target.name] : e.target.value})
    }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updating=()=>{
    dispatch(UpdateDataUser(updateUser))
    handleClose()
  }
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control defaultValue={user.name} onChange={HandleChange} name='name' type="text" placeholder="Enter your name" />
      <Form.Control defaultValue={user.age} onChange={HandleChange} name='age' type="number" placeholder="Enter your age" />
      <Form.Control defaultValue={user.email} onChange={HandleChange} name='email' type="email" placeholder="Enter email" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={updating}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateModal