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
                    name: 'Tier 1 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 1 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier2: [
                {
                    name: 'Tier 2 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 2 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 2 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier3: [
                {
                    name: 'Tier 3 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 3 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 3 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 3 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ],

            tier4: [
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                },
                {
                    name: 'Tier 4 Company',
                    img: '../assets/svg/acm_box_logo.svg',
                    url: 'https://www.youtube.com/watch?v=jO5IaAKTKsQ'
                }
            ]
        }

        const tier1Sponsors = sponsorsList.tier1.map( (sponsor) => {
            return(
                <Col xs={12} sm={6} md={6}>
                    <Panel className="Sponsors__card Sponsors__card--tier1">
                        <img className="Sponsors__cardLogo" src="../assets/svg/acm_box_logo.svg" />
                    </Panel>
                </Col>
            )
        });

        const tier2Sponsors = sponsorsList.tier2.map( (sponsor) => {
            return(
                <Col xs={12} sm={4} md={4}>
                    <Panel className="Sponsors__card Sponsors__card--tier2">
                        <img className="Sponsors__cardLogo" src="../assets/svg/acm_box_logo.svg" />
                    </Panel>
                </Col>
            )
        });

        const tier3Sponsors = sponsorsList.tier3.map( (sponsor) => {
            return(
                <Col xs={12} sm={3} md={3}>
                    <Panel className="Sponsors__card Sponsors__card--tier3">
                        <img className="Sponsors__cardLogo" src="../assets/svg/acm_box_logo.svg" />
                    </Panel>
                </Col>
            )
        });

        const tier4Sponsors = sponsorsList.tier4.map( (sponsor) => {
            return(
                <Col xs={12} sm={2} md={2}>
                    <Panel className="Sponsors__card Sponsors__card--tier4">
                        <img className="Sponsors__cardLogo" src="../assets/svg/acm_box_logo.svg" />
                    </Panel>
                </Col>
            )
        });

        return(
            <div className="Sponsors">
                <PageHeader className="Sponsors__header">Sponsors</PageHeader>
                <Grid>
                    <Row>
                        {tier1Sponsors}
                    </Row>
                    <Row>
                        {tier2Sponsors}
                    </Row>
                    <Row>
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
