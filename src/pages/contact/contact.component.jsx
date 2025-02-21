import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact .styles.css';


const Contact = () => {
    return (

      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3"> <strong>Contact Me! </strong> </h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:jbm9397@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="jbm9397@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/juneus-magsakay-21b7251b0/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkendIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/juneusmags" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-warning" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.instagram.com/uraveragecoder/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Follow Me!">
                    <i className="fab fa-instagram"></i> Instagram
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  };
  
  export default Contact;