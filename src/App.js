import React, { useState } from 'react';
import NavBar from './Components/Navbar';
import Container from 'react-bootstrap/Container';
import Eventcard from './Components/Eventcard';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div>
    <NavBar />
      <Container fluid className='overall'>
      <Container fluid className='pattern'>
          <Container fluid className='body'>
              <Container fluid className='HomeBack'></Container>
              <h1 id="about">_the grazing field</h1>
              <Container fluid className='events' style={{ display: 'flex', flexDirection: 'column', paddingBottom: '1%'}}>
                  <Eventcard left='25' right='40' event='_birthdays' text='make their day even more special with a range of sweets and savouries on a display that will blow them away' />
                  <Eventcard left='40' right='25' event='_weddings' text='ensure the newly wed couple gets a head start on the honeymoon body with this amazing romantic sweets platter' />
                  <Eventcard left='25' right='40' event='_baby showers' text='someone having a baby? We cater for themed baby showers (blue or pink) to help brighten your special day' />
                  <Eventcard left='40' right='25' event='_custom events' text='got other plans? send us a message with the details of your event and we will do our best to sort something out for you!' />
              </Container>
              </Container>
              </Container>
              <Container fluid className='contact'>
                  <h1 id="contact">_get in touch!</h1>
                  <h3 style={{ fontSize: '14pt', paddingLeft: '10%'}}>we'll get back to you by email (or phone) ASAP to discuss some options with you!</h3>
                  <Form action="https://formspree.io/thegrazingfield@gmail.com" method="POST">
                      <Form.Group as={Row}>
                          <Form.Label column sm={{ span: 1, offset: 2}}>
                              name*
                          </Form.Label>
                          <Col sm={5} lg={3}>
                              <Form.Control onChange={(event) => setUserName(event.target.value)} name="name" placeholder="first" required />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                          <Form.Label column sm={{ span: 1, offset: 2}}></Form.Label>
                          <Col sm={5} lg={3}>
                              <Form.Control name="name" placeholder="last" required />
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                          <Form.Label column sm={{ span: 1, offset: 2}}>
                              email*
                          </Form.Label>
                          <Col sm={5} lg={3}>
                              <Form.Control type="email" name="_replyto" placeholder="email" required/>
                          </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                          <Form.Label column sm={{ span: 1, offset: 2}}>
                              phone
                          </Form.Label>
                          <Col sm={5} lg={2}>
                              <Form.Control type="tel" name="tel" placeholder="(optional)" />
                          </Col>
                      </Form.Group>
                      <fieldset>
                          <Form.Group as={Row}>
                              <Form.Label as="legend" column sm={{ span: 1, offset: 2}}>
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
                          <Form.Label column sm={{ span: 1, offset: 2}}>
                              no. of guests
                          </Form.Label>
                          <Col sm={5} lg={2}>
                              <Form.Control type="text" name="guests" placeholder="e.g. 30" />
                          </Col>
                      </Form.Group>
                      <Form.Group id="description">
                          <Form.Label column sm={{ span: 1, offset: 2}}>
                              description*
                          </Form.Label>
                          <Col sm={{ span: 10, offset: 1}} lg={{ span: 8, offset: 2}} >
                              <Form.Control name="description" size="sm" as="textarea" rows="8" placeholder={`tell us about your event... (include things like allergies etc.) \nthis will help us tailor the experience to your needs`} required />
                              <h3 style={{padding: '0%', paddingTop: '1%'}}>(*) required fields</h3>
                              <h3 style={{padding: '0%', fontWeight: 'bold', textDecoration: 'underline'}}>important: we currently only service perth, western australia</h3>
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
