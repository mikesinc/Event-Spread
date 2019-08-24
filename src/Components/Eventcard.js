import React from 'react';
import Container from 'react-bootstrap/Container';
import './Eventcard.css'

const Eventcard = ({ event, text, left }) => {
    return (
        <Container fluid className='card'>
            <div className={left ? 'rightText' : 'leftText'}>
                <h2><span style={{color: '#00f2ff'}}>_</span>{event}</h2>
                <p style={{ textAlign: 'center' }} >{text}</p>
            </div>
            <img id={left ? 'leftImg' : 'rightImg'} className='icon' alt='bday' src={require(`../assets/images/${event}.jpg`)}></img>
        </Container>
    )
}

export default Eventcard;