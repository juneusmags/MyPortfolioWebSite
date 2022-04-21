import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/resimler/headshot.jpg'
import './about.component.style.css'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
      <Fade left big>
        <div id='about'>
         <div className="about">
          <h1 className="pt-3 text-center font-details pb-3"> <strong>About Me</strong></h1>
           <Container>
             <Row className="pt-3 pb-5 align-items-center">
               <Col xs={12} md={6} >
                 <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                 </Row>
               </Col>
                 <Col xs={12} md={6}>
                   <Row className=" align-items-start p-2 my-details rounded">
                   <div className="write">
                   <p>
                     Hello! I'm Juneus! I am coding bootcamp graduate. I've built many projects and websites that relate to my daily lifestyle. These projects help make hard tasks easy ones! They each have a simple and fluid design so the user can have a great experience. Work smarter not harder. You can catch me at a dance studio creating and learning outside the tech world. I have directed and taught many dance teams, music and concept videos around the DMV. These two passions allow me to keep my creative mind going because the learning never stops.
                   </p>
                    </div> 
                   </Row>
                     <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                           <div>
                             <a href="#contact">
                               <Button className="m-2" variant="outline-danger">
                               Let's Connect
                               </Button> 
                             </a>
                           </div>
                           <div>
                  </div>
                  <div>
                    <a href="https://github.com/juneusmags" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-light">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/juneus-magsakay-21b7251b0/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                        </Col>
                     </Row>
                 </Col>
             </Row>
           </Container>
        </div>
         </div>
         </Fade>
    )
}

export default About;