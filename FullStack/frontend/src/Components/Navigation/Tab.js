import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Tab = () => {
  return (
      <Navbar fixed="top" bg="dark" variant="dark" style={{height: "20px"}}>
        <Container>
          <Navbar.Brand href="#home">Anggota F.R.C</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{textDecoration: 'none'}}>
            <Nav.Link href="#home" className="ml-5">Home</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Tab;
