import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../Components/UserCard'
import { getAllDataUsers } from '../Redux/UserSlice'

const UserLists = () => {
  const users = useSelector(state=> state.User.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllDataUsers())
  },[])
  return (
    <div>
      {users?.map(user=> <UserCard key={user._id} user={user}/>)}
    </div>
  )
}

export default UserLists