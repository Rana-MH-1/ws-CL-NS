import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteUser } from "../Redux/UserSlice";
import UpdateModal from "./UpdateModal";

const UserCard = ({ user }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.age}
          </Card.Subtitle>
          <Card.Text>
            {user.email}
          </Card.Text>
        </Card.Body>
        <Button onClick={()=> dispatch(DeleteUser(user._id))} variant="danger">Delete</Button>
        <UpdateModal user={user} />

      </Card>
    </div>
  );
};

export default UserCard;
