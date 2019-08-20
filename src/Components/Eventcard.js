import React from 'react';
import Container from 'react-bootstrap/Container';
import './Eventcard.css'

const Eventcard = ({ event, text, left, right }) => {
    return (
        <Container fluid className='card' style={{ paddingLeft: `${left}%`, paddingRight: `${right}%` }} >
            <h2>{event}</h2>
            <p>{text}</p>
            <img style={{ right: left === '25' ? '77%' : '3%' }} className='icon' alt='bday' src={require(`../assets/images/${event}.jpg`)}></img>
        </Container>
    )
}

export default Eventcard;