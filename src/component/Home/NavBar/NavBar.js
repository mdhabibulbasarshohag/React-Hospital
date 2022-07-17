import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth'



const NavBar = () => {
  const { user, signOutt } = useAuth()
  return (
    <div className="bg-color-1">
      <Navbar bg="" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#"><h1><span>JM</span>-<span>Healthcare</span> </h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link as={Link} to="/home"><h5 className="text-white my-2 me-2">Home</h5></Link>
              {/* <Link to="/service"> <h5 className="text-white my-2 me-2">Service</h5> </Link> */}
              <Link to="/services"> <h5 className="text-white my-2 me-2">Services</h5> </Link>

              <Link to="/about"> <h5 className="text-white my-2 me-2">About</h5> </Link>


              <h5 className="text-white my-2 me-3">{user?.displayName || ' user '}</h5>
              <img className="me-3 border rounded-circle" style={{ height: '50px', width: '50px', borderRadius: '50px' }} src={user.photoURL || 'Broken img'} alt="" />
              {
                user.email ? <Link as={Link} onClick={signOutt} to="/log"><h5 className="text-white my-2 me-2">Log out</h5></Link> : <Link as={Link} to="/log"><h5 className="text-white my-2 me-2">Log in</h5></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </div>
  );
};

export default NavBar;