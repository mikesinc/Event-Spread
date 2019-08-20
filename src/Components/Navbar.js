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
        <div>
            <Navbar style={visible ? null : { top: '-10%' }} fixed='top' bg="light" expand="sm" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto links">
                        <Nav.Link href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
                            <img src={require('../assets/images/fb.png')} height="40vw" weight="40vw" alt='fb'></img>
                        </Nav.Link>
                        <Nav.Link href='https://www.instagram.com/mikesinclair/' target='_blank' rel='noopener noreferrer'>
                            <img src={require('../assets/images/IG.png')} height="37vw" weight="37vw" alt='ig'></img>
                        </Nav.Link>
                        <h3 style={{padding: '6%', paddingRight: '0%', height: '0', textAlign: 'right'}}>website by mikesinc</h3>
                        <Nav.Link href='https://github.com/mikesinc' target='_blank' rel='noopener noreferrer'>
                            <img src='https://avatars2.githubusercontent.com/u/28840236?s=460&v=4' height="40vw" weight="40vw" alt='git'></img>
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className="px-5" href="/">_home</Nav.Link>
                        <Nav.Link className="px-5" onClick={() => setTop('#about')}>_about</Nav.Link>
                        <Nav.Link className="px-5" onClick={() => setTop('#contact')}>_contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            {!visible ?
                <img onClick={() => setTop('.overall')} id="goup" alt="up" src={require('../assets/images/uparrow.png')} width='50px'></img>
                :
                null
            }
        </div>
    )
}

export default NavBar;