import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link } from 'react-router-dom';



function HeaderNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">BLOG APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navLinks"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/home"} className='links'>Home</Link>
            <Link to={"/register"} className='links'>SignUp</Link>
            <Link to={"/login"} className='links'>Login</Link>
            <Link to={"/addblog"} className='links'>AddBlogs</Link>
           
          </Nav>
          <Form className="d-flex "  >
            <Form.Control
          
              type="search"
              placeholder="Search "
              className="me-2  headerInput  "
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;

