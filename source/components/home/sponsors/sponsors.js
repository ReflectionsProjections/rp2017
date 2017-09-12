import React, { Component } from 'react'
import { Grid, Row, Col, Panel, PageHeader } from 'react-bootstrap'

import styles from './styles.scss'

class Sponsors extends Component {

    constructor() {
        super()
    }

    render() {
        const sponsorsList = {
            tier1: [
                {
                    name: 'Nvidia',
                    img: '../assets/img/sponsors/jobfair/petabyte/nvidia.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier2: [
                {
                    name: 'RetailMeNot',
                    img: '../assets/img/sponsors/jobfair/terabyte/retailmenot.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier3: [
                {
                    name: 'Forcepoint',
                    img: '../assets/img/sponsors/jobfair/gigabyte/forcepoint.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'IMO',
                    img: '../assets/img/sponsors/jobfair/gigabyte/imo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Microsoft',
                    img: '../assets/img/sponsors/jobfair/gigabyte/microsoft.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Northern Trust',
                    img: '../assets/img/sponsors/jobfair/gigabyte/northerntrust.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Qualtrics',
                    img: '../assets/img/sponsors/jobfair/gigabyte/qualtrics.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'HackIllinois',
                    img: '../assets/img/sponsors/jobfair/gigabyte/hackillinois.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier4: [
                {
                    name: 'Amobee',
                    img: '../assets/img/sponsors/jobfair/megabyte/amobee.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Buildout',
                    img: '../assets/img/sponsors/jobfair/megabyte/buildout.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'CME Group',
                    img: '../assets/img/sponsors/jobfair/megabyte/cmegroup.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Facebook',
                    img: '../assets/img/sponsors/jobfair/megabyte/facebook.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'gartner',
                    img: '../assets/img/sponsors/jobfair/megabyte/gartner.PNG',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Google',
                    img: '../assets/img/sponsors/jobfair/megabyte/google.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Indeed',
                    img: '../assets/img/sponsors/jobfair/megabyte/indeed.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Morningstar',
                    img: '../assets/img/sponsors/jobfair/megabyte/morningstar.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Navtalent',
                    img: '../assets/img/sponsors/jobfair/megabyte/navtalent.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'NccGroup',
                    img: '../assets/img/sponsors/jobfair/megabyte/nccgroup.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Pinterest',
                    img: '../assets/img/sponsors/jobfair/megabyte/pinterest.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Sandia',
                    img: '../assets/img/sponsors/jobfair/megabyte/sandia.jpg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Uber',
                    img: '../assets/img/sponsors/jobfair/megabyte/uber.png',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },

                // startups

                {
                    name: '',
                    img: '../assets/img/sponsors/startups/andreessenhorowitz.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/buildout.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/cloudflare.svg',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/curalate.svg',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/granular.jpg',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/liferay.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/mixmax.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/ocient.jpeg',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/rubrik.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/samsara.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/sproutsocial.png',
                    url: ''
                },
                {
                    name: '',
                    img: '../assets/img/sponsors/startups/thinkbig.jpg',
                    url: ''
                }

            ]
        }

        const tier1Sponsors = sponsorsList.tier1.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={6} md={6} className="Sponsors__centeredCard">
                    <Panel className="Sponsors__card Sponsors__card--tier1">
                        <img className="Sponsors__cardLogo" src={sponsor.img} />
                    </Panel>
                </Col>
            )
        });

        const tier2Sponsors = sponsorsList.tier2.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={4} md={4} className="Sponsors__centeredCard">
                    <Panel className="Sponsors__card Sponsors__card--tier2">
                        <img className="Sponsors__cardLogo" src={sponsor.img} />
                    </Panel>
                </Col>
            )
        });

        const tier3Sponsors = sponsorsList.tier3.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={4} md={4}>
                    <Panel className="Sponsors__card Sponsors__card--tier3">
                        <img className="Sponsors__cardLogo" src={sponsor.img} />
                    </Panel>
                </Col>
            )
        });

        const tier4Sponsors = sponsorsList.tier4.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={3} md={3}>
                    <Panel className="Sponsors__card Sponsors__card--tier4">
                        <img className="Sponsors__cardLogo" src={sponsor.img} />
                    </Panel>
                </Col>
            )
        });

        return(
            <div className="Sponsors" id="Sponsors">
                <PageHeader className="Sponsors__header">Sponsors</PageHeader>
                <Grid>
                    <Row>
                        {tier1Sponsors}
                    </Row>
                    <Row>
                        {tier2Sponsors}
                    </Row>
                    <Row className="Sponsors_centerContent">
                        {tier3Sponsors}
                    </Row>
                    <Row>
                        {tier4Sponsors}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Sponsors
