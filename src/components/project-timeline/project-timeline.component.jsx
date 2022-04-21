import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";


import L_ColorGame from "../../assets/projects/colorGame.png";
import L_Covid19 from "../../assets/projects/Covid19.png";
import L_Commerce from "../../assets/projects/e-commerce.png";
import L_RockPaperGmae from "../../assets/projects/RockPaper.png";
import L_LolMemoryGame from "../../assets/projects/LolMemoryGame.png";
import L_MovieSeat from "../../assets/projects/MoevieSeat.png";
import L_NewsYearsApp from "../../assets/projects/newYearApp.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/projects/bootstrap-5-1.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import L_DANCEBOOK from "../../assets/projects/Dancebook.png"
import L_JUPITER from "../../assets/projects/JupiterPay.png"
import L_VINTAGE from "../../assets/projects/Vintage.png"
import L_PYTHON from "../../assets/projects/python.svg"
import L_FLASK  from "../../assets/projects/flask.svg"
import L_SQL from "../../assets/projects/mysql-icon.svg"
import L_MONGO from "../../assets/projects/mongodb-icon.svg"


import "./project-timeline.style.css";


const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: 'rebeccapurple',
  },
  marker: {
    borderColor: 'rebeccapurple',
  },
  timelineTrack: {
    backgroundColor: '#00fff7',
  },
});


const ProjectTimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3"> <strong>PROJECTS</strong></h1>
      <Timeline theme = {customTheme}>
        <Events>
        
        <ImageEvent
            className="text-center"
            text="Dancebook"
            src={L_DANCEBOOK}
            alt="Social Media Site"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a social media application where you can share your ideas with the world!
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Pure and Simple Design inspired by Facebook.</li>
                          <li>Powered by Flask and MySQL</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FLASK}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Flask
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SQL}
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/juneusmags/dance_app_2"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="http://34.230.81.250/"
                  target="_blank"
                >
                  Live Site
                </UrlButton>
              </div>
            </div>
          </ImageEvent>




          <ImageEvent
            className="text-center"
            text="VintageOnline"
            src={L_VINTAGE}
            alt="VintageOnline"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an online thrift store that allows users to easily sell/buy vintage products. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Powered by React and Redux</li>
                          <li>Uses MongoDB for the backend</li>
                          <li>Designed with Bootstrap for a fluid user experience</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGO}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/juneusmags/vintage_online_2"
                  target="_blank"
                >
                  Source Code
                </UrlButton>
                <UrlButton
                  href="http://vintageonlineapp.herokuapp.com/"
                  target="_blank"
                >
                  Live Site
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

         
          <ImageEvent
            className="text-center"
            text="JupiterPay"
            src={L_JUPITER}
            alt="Budget App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A simple way to manage your terrible spending habits.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add, edit, and delete expenses</li>
                          <li>Utilizes users local storage to store temporary data</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/juneusmags/jupiterpay"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://unruffled-jang-b98285.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

         

          
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeLine;