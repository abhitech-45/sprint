// import React, { useState, useEffect } from "react";
// import { Container, Navbar, Nav, NavDropdown, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./mainpage.css"; // Import the updated CSS file

// // Main Page Component
// function Mainpage() {
//   const [isScrolled, setIsScrolled] = useState(false);  // State to check if user has scrolled

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);  // Change navbar style once scrolled
//       } else {
//         setIsScrolled(false); // Reset the navbar style if on top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* Navbar Component */}
//       <Navbar expand="lg" className={`navbar-custom ${isScrolled ? "scrolled" : ""}`}>
//         <Container>
//           <Navbar.Brand href="#home" className="navbar-brand">Evergreen Healthcare</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
//               <Nav.Link href="#services" className="navbar-link">Services</Nav.Link>
//               <Nav.Link href="#about" className="navbar-link">About Us</Nav.Link>
//               <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link>
//               <NavDropdown title="Login as" id="basic-nav-dropdown" className="navbar-dropdown">
//                 <NavDropdown.Item as={Link} to="/home" className="dropdown-item">Admin</NavDropdown.Item>
//                 <NavDropdown.Item href="#physician" className="dropdown-item">Physician</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/home"  className="dropdown-item">Receptionist</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <Container fluid className="hero-container">
//         <div className="hero-content">
//           <h1 className="hero-title">Welcome to Evergreen Healthcare</h1>
//           <p className="hero-description">Compassionate Care. Advanced Technology. Trusted Professionals.</p>
//           <Button variant="primary" className="hero-btn">Explore Services</Button>
//         </div>
//       </Container>

//       {/* Footer Section */}
//       <footer className="footer">
//         <Container>
//           <Row>
//             <Col>
//               <p>&copy; 2024 Evergreen Healthcare | All Rights Reserved</p>
//             </Col>
//             <Col>
//               <p>Contact us at: <a href="mailto:contact@hospitalsystem.com">contact@hospitalsystem.com</a></p>
//             </Col>
//             <Col>
//               <div className="social-icons">
//                 <a href="#" className="social-icon">Facebook</a>
//                 <a href="#" className="social-icon">Twitter</a>
//                 <a href="#" className="social-icon">Instagram</a>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default Mainpage;

// import React, { useState, useEffect } from "react";
// import { Container, Navbar, Nav, NavDropdown, Button, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./mainpage.css"; // Import the updated CSS file

// // Main Page Component
// function Mainpage() {
//   const [isScrolled, setIsScrolled] = useState(false);  // State to check if user has scrolled

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);  // Change navbar style once scrolled
//       } else {
//         setIsScrolled(false); // Reset the navbar style if on top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* Navbar Component */}
//       <Navbar expand="lg" className={`navbar-custom ${isScrolled ? "scrolled" : ""}`}>
//         <Container>
//           <Navbar.Brand href="#home" className="navbar-brand">Evergreen Healthcare</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
//               <Nav.Link href="#about" className="navbar-link">About Us</Nav.Link>
//               <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link>
//               <NavDropdown title="Login as" id="basic-nav-dropdown" className="navbar-dropdown">
//                 <NavDropdown.Item as={Link} to="/home" className="dropdown-item">Admin</NavDropdown.Item>
//                 <NavDropdown.Item href="#physician" className="dropdown-item">Physician</NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/home"  className="dropdown-item">Receptionist</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Hero Section */}
//       <Container fluid className="hero-container">
//         <div className="hero-content">
//           <h1 className="hero-title">Welcome to Evergreen Healthcare</h1>
//           <p className="hero-description">Compassionate Care. Advanced Technology. Trusted Professionals.</p>
//           <Button variant="primary" className="hero-btn">Explore Services</Button>
//         </div>
//       </Container>

//       {/* About Us Section with Cards */}
//       <Container id="about" className="my-5">
//         <h2 className="section-title text-center">About Us</h2>
//         <Row className="g-4">
//           <Col md={4}>
//             <Card className="about-card">
//               <Card.Img variant="top" src="https://www.awpem.com/assets/img/about/mission-awpem.png" />
//               <Card.Body>
//                 <Card.Title>Our Mission</Card.Title>
//                 <Card.Text>
//                   We are committed to providing exceptional healthcare services that meet the needs of our community. 
//                   Our team strives to deliver the highest standard of care.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="about-card">
//               <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPrz80IBVkb--HcnS-yjPfCFYaKXGoV03cw&s" />
//               <Card.Body>
//                 <Card.Title>Our Values</Card.Title>
//                 <Card.Text>
//                   Integrity, compassion, and innovation are at the core of everything we do. 
//                   We believe in treating every patient with the utmost respect and care.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="about-card">
//               <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyKfxFKhm_kKI4JaH-hbjqJKu9_3Ms9K5zDgrt8ms82YYNM1mEjU7JCwQEROc4YtVjxc&usqp=CAU" />
//               <Card.Body>
//                 <Card.Title>Our Team</Card.Title>
//                 <Card.Text>
//                   Our healthcare team is composed of dedicated professionals who are passionate about improving 
//                   patient outcomes and delivering top-notch care.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer Section */}
//       <footer className="footer">
//         <Container>
//           <Row>
//             <Col>
//               <p>&copy; 2024 Evergreen Healthcare | All Rights Reserved</p>
//             </Col>
//             <Col>
//               <p>Contact us at: <a href="mailto:contact@hospitalsystem.com">contact@hospitalsystem.com</a></p>
//             </Col>
//             <Col>
//               <div className="social-icons">
//                 <a href="#" className="social-icon">Facebook</a>
//                 <a href="#" className="social-icon">Twitter</a>
//                 <a href="#" className="social-icon">Instagram</a>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default Mainpage;
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mainpage.css"; // Import the updated CSS file

// Main Page Component
function Mainpage() {
  const [isScrolled, setIsScrolled] = useState(false);  // State to check if user has scrolled

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);  // Change navbar style once scrolled
      } else {
        setIsScrolled(false); // Reset the navbar style if on top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form Submitted:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submit
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar expand="lg" className={`navbar-custom ${isScrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">Evergreen Healthcare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
              <Nav.Link href="#about" className="navbar-link">About Us</Nav.Link>
              <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link> {/* Contact link */}
              <NavDropdown title="Login as" id="basic-nav-dropdown" className="navbar-dropdown">
                <NavDropdown.Item as={Link} to="/home" className="dropdown-item">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#physician" className="dropdown-item">Physician</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/home"  className="dropdown-item">Receptionist</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container fluid className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Evergreen Healthcare</h1>
          <p className="hero-description">Compassionate Care. Advanced Technology. Trusted Professionals.</p>
          <Button variant="primary" className="hero-btn">Explore Services</Button>
        </div>
      </Container>

      {/* About Us Section with Cards */}
      <Container id="about" className="my-5">
        <h2 className="section-title text-center">About Us</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="about-card">
              <Card.Img variant="top" src="https://www.awpem.com/assets/img/about/mission-awpem.png" />
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  We are committed to providing exceptional healthcare services that meet the needs of our community. 
                  Our team strives to deliver the highest standard of care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPrz80IBVkb--HcnS-yjPfCFYaKXGoV03cw&s" />
              <Card.Body>
                <Card.Title>Our Values</Card.Title>
                <Card.Text>
                  Integrity, compassion, and innovation are at the core of everything we do. 
                  We believe in treating every patient with the utmost respect and care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card">
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyKfxFKhm_kKI4JaH-hbjqJKu9_3Ms9K5zDgrt8ms82YYNM1mEjU7JCwQEROc4YtVjxc&usqp=CAU" />
              <Card.Body>
                <Card.Title>Our Team</Card.Title>
                <Card.Text>
                  Our healthcare team is composed of dedicated professionals who are passionate about improving 
                  patient outcomes and delivering top-notch care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Form Section */}
      <Container id="contact" className="my-5">
        <h2 className="section-title text-center">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Evergreen Healthcare | All Rights Reserved</p>
            </Col>
            <Col>
              <p>Contact us at: <a href="mailto:contact@hospitalsystem.com">contact@hospitalsystem.com</a></p>
            </Col>
            <Col>
              <div className="social-icons">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Mainpage;
