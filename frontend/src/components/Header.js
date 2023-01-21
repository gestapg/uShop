import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>uShop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/Cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              <i className='fas fa-user' /> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
