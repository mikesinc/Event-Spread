import React from 'react';
import Container from 'react-bootstrap/Container';
import './Eventcard.css'

const Eventcard = ({ event, text }) => {
    return (
        <Container fluid className='card'>
            <h2>{event}</h2>
            <img className='icon' alt='bday' src={require('../assets/images/spread1.jpg')}></img>
            <p>{text}</p>
        </Container>
    )
}

export default Eventcard;