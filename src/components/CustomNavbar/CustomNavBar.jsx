import { Link } from "react-router-dom"
import styles from './CustomNavBar.module.css'
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function CustomNavbar() {
  return (
    <Navbar expand='lg' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
        <Nav.Link as={Link} to='/resume'>Resume</Nav.Link>
        <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;