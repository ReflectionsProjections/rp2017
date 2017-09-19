import React, { Component } from 'react'
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap'

import styles from './styles.scss'

class Tracks extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        const cardHeightHandler = () => {
            let cards = document.getElementsByClassName('Tracks__card');
            const cardHeights = Array.prototype.map.call(cards, (card) => {
                return card.offsetHeight;
            });

            const maxHeight = Math.max.apply(null, cardHeights);
            Array.prototype.forEach.call(cards, (card) => {
                card.style.height = maxHeight + "px";
            });
        };

        window.addEventListener('load', () => {
            cardHeightHandler();
        });

        window.addEventListener('resize', () => {
            cardHeightHandler();
        });
    }

    render() {
        const trackList = [
            {
                'name': 'Data/AI',
                'desc': 'Join us for talks by leading professionals and researchers in Artificial Intelligence, Machine Learning, and Data Science featuring Spotify\'s Directors of Data Solutions.',
                'color':'#9a6fb0'
            },
            {
                'name': 'HCI/VR',
                'desc': 'One of the latest applications of computer science in human-computer interaction is augmented and virtual reality. Come see our speakers with extensive experience in VR and AR to hear about how user experience is revolutionizing.',
                'color':'#02B2CA'
            },
            {
                'name': 'Security/Privacy',
                'desc': 'Come join some of the leading professionals in cybersecurity and privacy to learn about hacking, combating cyberterrorism, and cracking cryptography. Professors and engineers will be presenting cutting edge security research and applications in industry!',
                'color': '#EC7F48'
            },
            {
                'name': 'Systems',
                'desc': 'If you’re interested in how companies customize Linux in production or how contributing to Open Source plays a role in industry, come to talks from our Systems speakers! Further topics include networking, operating systems, and distributed systems.',
                'color':'#E4222B'
            }
        ];

        const trackView = trackList.map( (track, idx) => {
            return(
                <Col key={idx} xs={12} sm={6} md={4}>
                    <Panel className="Tracks__card" style={{"border":"5px solid"+track.color}}>
                        <h3>{track.name}</h3><br />
                        <h5>{track.desc}</h5>
                    </Panel>
                </Col>
            )
        });

        return(
            <div className="Tracks" id="Tracks">
                <PageHeader className="Tracks__header">Tracks</PageHeader>
                <Grid>
                    <Row>
                        {trackView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Tracks
