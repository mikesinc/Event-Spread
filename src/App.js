import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar';
import Container from 'react-bootstrap/Container';
import Eventcard from './Components/Eventcard';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';
import SmoothParallax from 'smooth-parallax';

function App() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        console.log(window.innerWidth);
        if(window.innerWidth > 1000) {
            window.addEventListener("load", function () {
                SmoothParallax.init();
            });
        }
        const homebanner = document.querySelector(".HomeBack");
        homebanner.addEventListener("mousemove", (e) => {
            homebanner.style.backgroundPositionX = e.offsetX*-0.05 + "px";
            homebanner.style.backgroundPositionY = -e.offsetY*0.05 + "px";
        });
    },[])


    return (
        <div>
            <NavBar />
            <Container fluid className='overall'>
                <Container fluid className='body'>
                    <Container fluid className='HomeBack'></Container>
                    <Container fluid className="Intro">
                        <img smooth-parallax="" start-position-x="-.1" end-position-x="0.1" end-movement="2.0" id="perth" alt="perth" src={require('./assets/images/perth2.jpg')}></img>
                        <h1 id="about">_the grazing field</h1>
                        <p>organising a social event? not sure what to do for food?</p>
                        <p>we are a local catering service based in sunny perth, western australia. we provide a range of custom made platters for group functions that not only taste great but look insta-worthy (amazing!). whether sweet is your thing, or you prefer something savoury, we have got you covered so you can forget the stress of catering for your social event.</p>
                        <p>the grazing field is flexbile to dietary requirements and / or preferences, let us know what you need and we take care of the rest, including delivery. currently the grazing field only services perth, but we have plans to expand over east in the future, so watch this space!</p>
                        <p>see below for some of the events we can do for you..</p>
                    </Container>
                    <Container fluid className='events' style={{ display: 'flex', flexDirection: 'column', padding: '0%' }}>
                        <h1 id="platter">_grazing platters</h1>
                        <div smooth-parallax="" start-position-x="-0.5" end-movement="0.3">
                            <Eventcard left='0' right='50' event='_birthdays' text='make their day even more special with a range of sweets and savouries on a display that will blow them away' />
                        </div>
                        <div smooth-parallax="" start-position-x="0.5" end-movement="0.55">
                            <Eventcard left='50' right='0' event='_weddings' text='ensure the newly wed couple gets a head start on the honeymoon body with this amazing romantic sweets platter' />
                        </div>
                        <div smooth-parallax="" start-position-x="-0.5" end-movement="0.8">
                            <Eventcard left='0' right='50' event='_baby showers' text='someone having a baby? We cater for themed baby showers (blue or pink) to help brighten your special day' />
                        </div>
                        <div smooth-parallax="" start-position-x="0.5" >
                            <Eventcard left='50' right='0' event='_custom events' text='got other plans? send us a message with the details of your event and we will do our best to sort something out for you!' />
                        </div>
                    </Container>
                </Container>
                <Container fluid className='contact'>
                    <h1 id="contact">_get in touch!</h1>
                    <h3 style={{ fontSize: '14pt', paddingLeft: '10%' }}>we'll get back to you by email (or phone) ASAP to discuss some options with you!</h3>
                    <Form action="https://formspree.io/thegrazingfield@gmail.com" method="POST">
                        <Form.Group as={Row}>
                            <Form.Label column sm={{ span: 1, offset: 2 }}>
                                name*
                          </Form.Label>
                            <Col sm={5} lg={3}>
                                <Form.Control onChange={(event) => setUserName(event.target.value)} name="name" placeholder="first" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{ span: 1, offset: 2 }}></Form.Label>
                            <Col sm={5} lg={3}>
                                <Form.Control name="name" placeholder="last" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{ span: 1, offset: 2 }}>
                                email*
                          </Form.Label>
                            <Col sm={5} lg={3}>
                                <Form.Control type="email" name="_replyto" placeholder="email" required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{ span: 1, offset: 2 }}>
                                phone
                          </Form.Label>
                            <Col sm={5} lg={2}>
                                <Form.Control type="tel" name="tel" placeholder="(optional)" />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={{ span: 1, offset: 2 }}>
                                    event type
                              </Form.Label>
                                <Col sm={5} lg={3}>
                                    <Form.Check
                                        type="radio"
                                        label="birthday"
                                        name="_subject"
                                        value={`birthday for ${userName}`}
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="wedding"
                                        name="_subject"
                                        value={`wedding for ${userName}`}
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="baby shower"
                                        name="_subject"
                                        value={`baby shower for ${userName}`}
                                        id="formHorizontalRadios3"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="other"
                                        name="_subject"
                                        value={`other for ${userName}`}
                                        id="formHorizontalRadios4"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row}>
                            <Form.Label column sm={{ span: 1, offset: 2 }}>
                                no. of guests
                          </Form.Label>
                            <Col sm={5} lg={2}>
                                <Form.Control type="text" name="guests" placeholder="e.g. 30" />
                            </Col>
                        </Form.Group>
                        <Form.Group id="description">
                            <Form.Label column sm={{ span: 1, offset: 2 }}>
                                description*
                          </Form.Label>
                            <Col sm={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} >
                                <Form.Control name="description" size="sm" as="textarea" rows="8" placeholder={`tell us about your event... (include things like allergies etc.) \nthis will help us tailor the experience to your needs`} required />
                                <h3 style={{ padding: '0%', paddingTop: '1%' }}>(*) required fields</h3>
                                <h3 style={{ padding: '0%', fontWeight: 'bold', textDecoration: 'underline' }}>important: we currently only service perth, western australia</h3>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 3, offset: 8 }} lg={{ span: 3, offset: 8 }}>
                                <Button type="submit" variant="info">send message</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        </div>
    )
}

export default App;
