import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

const NavBar = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        })
    })

    const setTop = (height) => {
        document.querySelector(height).scrollIntoView({ 
            behavior: 'smooth' 
          });
    }

    return (
            <Navbar style={visible ? null : {top: '-10%'}} fixed='top' bg="light" expand="sm" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="px-5" href="/">home</Nav.Link>
                        <Nav.Link className="px-5" onClick={() => setTop('h1')}>about</Nav.Link>
                        <Nav.Link className="px-5" href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;