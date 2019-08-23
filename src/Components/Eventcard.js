import React from 'react';
import Container from 'react-bootstrap/Container';
import './Eventcard.css'

const Eventcard = ({ event, text, left, right }) => {
    return (
        <Container fluid className='card'>
            <h2 style={{ paddingLeft: right*20+200, paddingRight: left*20+200}}>{event}</h2>
            <p style={{ paddingLeft: right*20+200, paddingRight: left*20+200}} >{text}</p>
            <img style={{ left: left, right: right}} className='icon' alt='bday' src={require(`../assets/images/${event}.jpg`)}></img>
        </Container>
    )
}

export default Eventcard;