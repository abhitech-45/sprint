import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarSection()
{
    return <div>
        <Navbar expand="lg" className="navbar-custom sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            Evergreen Healthcare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
              <Nav.Link href="#services" className="navbar-link">Services</Nav.Link>
              <Nav.Link href="#about" className="navbar-link">About Us</Nav.Link>
              <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link>
              <NavDropdown title="Login as" id="basic-nav-dropdown" className="navbar-dropdown">
                <NavDropdown.Item as={Link} to="/home" className="dropdown-item">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#physician" className="dropdown-item">Physician</NavDropdown.Item>
                <NavDropdown.Item href="#receptionist" className="dropdown-item">Receptionist</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
}

export default NavbarSection