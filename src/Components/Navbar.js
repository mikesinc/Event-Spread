import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

const NavBar = () => {
    return (
        <Navbar fixed='top' bg="light" expand="sm" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="px-5" href="/">home</Nav.Link>
                    <Nav.Link className="px-5" href="/about">about</Nav.Link>
                    <Nav.Link className="px-5" href="/contact">contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;