import React, { Component } from 'react'
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap'

import styles from './styles.scss'

class Tracks extends Component {

    constructor() {
        super()
    }

    render() {
        const trackList = [
            {
                'name': 'Data/AI',
                'desc': 'Artificial intelligence, machine learning, data science! Did we get your attention? If you’re excited to hear about the latest computer science trend, then join us for talks with professionals in the industry.'
            },
            {
                'name': 'HCI/VR',
                'desc': 'One of the latest applications of computer science in human-computer interaction is virtual reality and augmented reality. Come see our speakers with extensive experience in VR and AR to hear about how user experience is revolutionizing!'
            },
            {
                'name': 'Security/Privacy',
                'desc': 'Come join some of the leading professionals in security to learn about cybersecurity, means of combating cyberterrorism, cryptography, and hacking. Professors and engineers will be presenting on cutting edge security research and applications in industry!'
            },
            {
                'name': 'Systems',
                'desc': 'If you’re interested in how companies customize and use Linux in production or how contributing to open source plays a role in industry, come to talks from our Systems speakers! Further topics include networking, other operating systems, and distributed systems.'
            },
            {
                'name': 'Misc',
                'desc': 'Listen to speakers talk about how computer science can play a role in fields outside of STEM such as fine arts, education, dance - the applications are endless! You’ll see some unique performances (yes, performances!) and presentations to showcase the versatility of CS.'
            }
        ];

        const trackView = trackList.map( (track) => {
            return(
                <Col xs={12} sm={6} md={4}>
                    <Panel className="Tracks__card">
                        <h3>{track.name}</h3>
                        <h5>{track.desc}</h5>
                    </Panel>
                </Col>
            )
        });

        return(
            <div className="Tracks">
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
