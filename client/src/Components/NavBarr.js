import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NavBarr = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/add">Add a user</Nav.Link>
            <Nav.Link as={Link} to="/users">UserLists</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBarr