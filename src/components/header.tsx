import React, { useEffect } from 'react'
import { Container, Nav, Navbar,  Offcanvas, } from 'react-bootstrap';

import Logo from '../assets/logo.jpeg'

interface Props {
    
}

const Header = (props: Props) => {
  const expand = 'lg';

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('custom-navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('navbar-bg-white');
        } else {
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('navbar-bg-white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
      <Navbar
      key={expand}
      expand={expand}
      fixed='top'
      className="navbar-sticky  mb-0 navbar-transparent" // Add the 'navbar-transparent' class
      id="custom-navbar" // Add an id for easier manipulation
    >
      <Container>
        <Navbar.Brand href="#"><img src={Logo} alt="" style={{width: '60px'}}/><span className='logo_text ms-3'>LAGEXCELGLOBAL</span></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img src={Logo} alt="" style={{width: '60px'}}/><span className='logo_text ms-3'>LAGEXCELGLOBAL</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Our Services</Nav.Link>
              <Nav.Link href="contact">Contact us</Nav.Link>
             
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    )
}

export default Header
