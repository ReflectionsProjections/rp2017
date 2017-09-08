import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix } from 'react-bootstrap'

import styles from './styles.scss'

class Speakers extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            let cards = document.getElementsByClassName('Speakers__card');
            const cardHeights = Array.prototype.map.call(cards, (card) => {
                return card.offsetHeight;
            });

            const maxHeight = Math.max.apply(null, cardHeights);
            cards = document.getElementsByClassName('js-speakercard');
            Array.prototype.forEach.call(cards, (card) => {
                card.style.height = maxHeight + "px";
            });
        });
    }

    render() {
        const speakerList = [
            // Keynotes
            {
                'name': 'Brian J. Fox',
                'desc': 'Title or Position at Company Name',
                'img': '../assets/img/brian.png'
            },
            {
                'name': 'Chris Gladwin',
                'desc': 'Title or Position at Company Name',
                'img': '../assets/img/chris.png'
            },

            // Data/AI
            {
                'name': 'Christine Hung',
                'desc': 'Machine Learning for Optimized Profitability',
                'img': '../assets/img/christine.png'
            },
            {
                'name': 'Wouter de Bie',
                'desc': 'Director of Engineering at Spotify',
                'img': '../assets/img/wouter.png'
            },
            {
                'name': 'Travis Oliphant',
                'desc': 'Data Science and Python Guru',
                'img': '../assets/img/travis.png'
            },
            {
                'name': 'Rumman Chowdhury',
                'desc': 'Utilizing artificial intelligence for the betterment of humanity',
                'img': '../assets/img/rumman.png'
            },
            // HCI / VR
            {
                'name': 'Erin Baker',
                'desc': 'Placeholder blurb',
                'img': '../assets/img/erin.png'
            },
            {
                'name': 'Steven Feiner',
                'desc': 'Integrating the real with the digital through AR technologies',
                'img': '../assets/img/steven.png'
            },
            {
                'name': 'Amir Ebrahimi',
                'desc': 'Helping today’s video game developers build VR games - in VR',
                'img': '../assets/img/amir.png'
            },
            {
                'name': 'Matt Schoen',
                'desc': '',
                'img': '../assets/img/matt.png'
            },
            // Security / Privacy
            {
                'name': 'Nate Cardozo',
                'desc': 'Cryptography and the Law',
                'img': '../assets/img/nate.png'
            },
            {
                'name': 'Shuo Chen',
                'desc': 'Microsoft Researcher and OS expert',
                'img': '../assets/img/shuo.png'
            },
            {
                'name': 'Arun Vishwanath',
                'desc': 'Reverse engineering today\'s hackers',
                'img': '../assets/img/arun.png'
            },
            {
                'name': 'Mark Scott',
                'desc': '',
                'img': '../assets/img/mark.png'
            },
            // Systems
            {
                'name': 'Sundari Mitra',
                'desc': 'Entrepreneur and electronic chips expert',
                'img': '../assets/img/sundari.png'
            },
            {
                'name': 'Andrew Schwartzmeyer',
                'desc': 'Microsoft Software Engineer and Open-Source Pundit',
                'img': '../assets/img/andrew.png'
            }
        ];

        const speakerView = speakerList.map( (speaker) => {
            if(speaker.keynote) {
                return(
                    <Col xs={12} sm={6} md={6}>
                        <Thumbnail className="Speakers__card--keynote js-speakercard" src={speaker.img}>
                            <h3>{speaker.name}</h3>
                            <p>{speaker.desc}</p>
                        </Thumbnail>
                    </Col>
                )
            } else {
                return(
                    <Col xs={12} sm={6} md={3}>
                        <Thumbnail className="Speakers__card js-speakercard" src={speaker.img}>
                            <h3>{speaker.name}</h3>
                            <p>{speaker.desc}</p>
                        </Thumbnail>
                    </Col>
                )
            }
        });

        return(
            <div className="Speakers">
                <PageHeader className="Speakers__header">Speakers</PageHeader>
                <Grid>
                    <Row>
                        {speakerView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Speakers
