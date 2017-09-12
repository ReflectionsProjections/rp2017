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
                    <p className="caps">September 29th - October 1st, 2017</p>
                    <p><Button href="http://reflectionsprojections.org/signup" className="About__registerButton caps">Register for Conference</Button></p>
                </Jumbotron>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={6}>
                            <Tabs className="About__leftTabs" defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="What is Reflections|Projections?">
                                <span>Reflections|Projections is a technology conference organized and run by students
                                at the University of Illinois at Urbana-Champaign.<br />
                                We draw students, speakers, and companies from around the world. Join us to
                                listen to tech talks from across the industry and academia, participate in an
                                Artificial Intelligence programming competition in Mechmania, solve puzzles
                                throughout the conference during PuzzleBang!, something about CodeGolf and
                                Escape Room?, and attend our job and startup fairs.<br />
                                The conference is free and open to anyone regardless of age, major, job, or
                                affiliation with the University of Illinois. So come join a discussion led by some of
                                the brightest minds in the business about the bleeding edge of the tech industry! <br />
                                You do not need to register for Reflections | Projections to attend; however, you
                                must be 18 or older to register, get food, and to guarantee you'll get a free
                                conference t-shirt!</span>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Tabs className="About__rightTabs" defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Puzzlebang!">
                                <span>
                                    The annual puzzle contest PuzzleBang is back again in 2017!  Teams will solve a series of puzzles throughout the week, concluding with a metapuzzle on Saturday.  Just finding out about PuzzleBang?  It’s not too late!  Grab a few friends and sign up at https://puzzlebang.com/!

                                    PuzzleBang is also running a separate escape room Friday-Sunday - you don’t need to play online in order to try the escape room.  Follow @puzzlebang on twitter for sign-up information and announcements.
                                </span>
                                </Tab>
                                <Tab eventKey={2} title="Mechmania">
                                <span>
                                    We know that you can’t wait for HackIllinois, so until then join us for Mechmania, University of Illinois’ 24 hour AI hackathon, on September 29th-30th, 2017! Bring your friends as your teammates and create a bot that beats everyone else's’ to win some cool prizes! Registration details coming soon!
                                </span>
                                </Tab>
                                <Tab eventKey={3} title="Career Fairs">
                                <span>
                                                                        Hoping to get an internship next summer with some of the hottest startups around? Come get a first-hand look at the latest tech ventures at the Reflections|Projections Startup Career Fair on September 26th, 2017.
                        <br /><br />
                                    Join us on September 27th, 2017 for the Reflections|Projections Career Fair! Last year, almost 2000 students interacted with 27 of the best tech companies around! Come dressed casually after class to interact with recruiters, learn about the companies, and apply for internships!

                                </span>
                                </Tab>
                                <Tab eventKey={4} title="Code Golf">
                                <span>
                                    Come and compete at the newest computer science competition at Reflections|Projections! Code Golf is a themed algorithmic programming competition where participants solve a series of increasingly difficult questions in as few lines as possible. Questions span a wide variety of topics and is suited for students of all levels of expertise. Join us for challenge, camaraderie, and fabulous prizes!
                                </span>
                                </Tab>
                                <Tab eventKey={5} title="Datathon">
                                <span>
                                    Reflections|Projections will be hosting the ADSA Electronic Trading Challenge (ETC) this year, a day-long programming contest where participants compete against each other in a simulated market. This event has been powered by Jane Street. We’ll begin at 10:00am CT on Saturday, September 23rd, and continue into the night. Breakfast, lunch, and dinner will be provided and there’s a cash prize for the winning team. You can sign up either as a single participant or as a team. If you sign up alone we’ll randomly assign you to a team. This event is intended only for students currently enrolled in a college or university.

Sign-ups will close on Sunday, September 17th at 11:59pm EDT and we’ll notify all interested students of their attendance by Tuesday, September 19th. Due to potential space constraints we are only going to provide the location and other details to those who are confirmed for a spot.
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
