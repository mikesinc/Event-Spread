import React from 'react';
import Container from 'react-bootstrap/Container';
import Eventcard from './Eventcard';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className='home'>
            <Container fluid className='HomeBack'></Container>
            <h1>event spreads by sarah</h1>
            <Container fluid className='events'>
                <Eventcard event='birthday' text='make their day even more special with a range of sweets and savouries on a display that will blow them away' />
                <Eventcard style={{display: 'flex', flexDirection: 'flex-end'}} event='wedding' text='ensure the newly wed couple gets a head start on the honeymoon body with this amazing romantic sweets platter' />
                <Eventcard event='baby' text='someone having a baby? We cater for themed baby showers (blue or pink) to help brighten your special day' />
                <Eventcard style={{display: 'flex', flexDirection: 'flex-end'}} event='custom' text='got other plans? send us a message with the details of your event and we will do our best to sort something out for you!'/>
            </Container>
        </Container>
    )
}

export default Home;