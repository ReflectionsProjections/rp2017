import React, { Component } from 'react'
import { Jumbotron, Button, Tabs, Tab, Grid, Row, Col } from 'react-bootstrap'

import styles from './styles.scss'

class About extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div id="About" className="About container">
                <Jumbotron>
                    <img className="About__header" src="../assets/svg/home_header.svg" />
                    <p className="caps">September 25th - October 1st, 2017</p>
                    <p><Button href="http://reflectionsprojections.org/signup" className="About__registerButton caps">Register for Conference</Button></p>
                </Jumbotron>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={6}>
                            <Tabs className="About__leftTabs" defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="What is Reflections|Projections?">
                                <span>Reflections | Projections is an annual technology conference organized and run by students
                                at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world. 
                                The week-long event features tech talks via speakers from across the industry and academia, two career fairs, and an array of workshops. 
                                Put your wits to the test with our Artificial Intelligence programming competition, MechMania, or our puzzle challenge Puzzlebang! 
                                <br /><br />
                                Reflections | Projections is free and open to anyone regardless of age, major, or
                                affiliation with the University of Illinois. Come join a discussion led by some of
                                the brightest minds in the business about the bleeding edge of the tech industry! <br />
                                You do not need to register for Reflections | Projections to attend; however, you
                                must be 18 or older to register, receive food, and receive a free conference t-shirt. </span>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Tabs className="About__rightTabs" defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Career Fairs">
                                <span>
                                    Join us for ACM Career Week on September 26th for our Startup Fair and on September 27th for our Career Fair! Both the Startup and Career Fair will run from 10am to 4pm.
                                    Last year, almost 2000 students interacted with 27 of the best tech companies around. Come dressed casually after class to interact with recruiters, learn about the companies, and apply for internships.
                                    <br/><br/>
                                    <a href="http://reflectionsprojections.org/companies" className="anchor-look-like-normal">Click here to view the list of companies attending!</a>
                                </span>
                                </Tab>
                                <Tab eventKey={2} title="Mechmania">
                                <span>
                                    MechMania is Reflection | Projection's 24 hour AI hackathon returning September 29th-30th, 2017 in 1404 Siebel. 
                                    Compete in a battle of wits on a virtual battlefield! 
                                    MechMania is an overnight hack-a-thon for teams of up to four people. 
                                    Participants have twenty-four hours to write an autonomous program that will play against other bots in an original video 
                                    game, which is revealed when the event begins at 8pm, September 29th, 2017. <br/><br/>
                                    <a href="https://acmrp.org/mechmania" className="anchor-look-like-normal">You can register here!</a>
                                </span>
                                </Tab>
                                <Tab eventKey={3} title="Puzzlebang!">
                                <span>
                                    The annual puzzle contest PuzzleBang is back again in 2017!  Teams will solve a series of puzzles throughout the week, concluding with a metapuzzle on Saturday.  
                                    Just finding out about PuzzleBang?  It’s not too late!  Grab a few friends and <a href="https://puzzlebang.com" className="anchor-look-like-normal">sign up here.  </a>

                                    PuzzleBang is also running a separate escape room Friday-Sunday - you don’t need to play online in order to try the escape room.  
                                    Follow <a href="https://twitter.com/puzzlebang" className="anchor-look-like-normal">@puzzlebang</a> on twitter for sign-up information and announcements.
                                </span>
                                </Tab>
                                <Tab eventKey={4} title="Code Golf">
                                <span>
                                    Come and compete at the newest computer science competition at Reflections|Projections! Code Golf is a themed algorithmic programming competition in which participants solve a series of 
                                    increasingly difficult questions in as few lines as possible. Questions span a wide variety of topics and are suited for students of all levels of expertise. Join us for challenge, camaraderie, and fabulous prizes!
                                    <br/><br/>
                                    Codegolf will be held on Friday, September 29th from 8pm-12am in 2405 Siebel.  Registration coming soon! 
                                </span>
                                </Tab>
                                <Tab eventKey={5} title="ETC">
                                <span>
                                    Reflections | Projections will be hosting the Electronic Trading Challenge (ETC) powered by Jane Street. The ETC is a day-long programming contest where participants compete against each other in a simulated market.
                                    <br/><br/>
                                    Sign-ups will close on Sunday, September 17th at 11:59pm EDT, and we’ll notify all interested students of their attendance by Tuesday, September 19th. Due to potential space constraints, we are only going to provide the location and other details to those who are confirmed for a spot.
                                    <br/><br/>
                                    Click <a href="http://reflectionsprojections.org/etc-signup" className="anchor-look-like-normal">here to sign up</a> and click <a href="http://reflectionsprojections.org/etc" className="anchor-look-like-normal">here for our FAQ</a>!
                                </span>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default About
