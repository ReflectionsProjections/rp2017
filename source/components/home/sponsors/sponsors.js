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
                    url: 'https://www.nvidia.com/page/home.html'
                }
            ],

            tier2: [
                {
                    name: 'RetailMeNot',
                    img: '../assets/img/sponsors/jobfair/terabyte/retailmenot.svg',
                    url: 'https://www.retailmenot.com/'
                }
            ],

            tier3: [
                {
                    name: 'Forcepoint',
                    img: '../assets/img/sponsors/jobfair/gigabyte/forcepoint.png',
                    url: 'https://www.forcepoint.com'
                },
                {
                    name: 'IMO',
                    img: '../assets/img/sponsors/jobfair/gigabyte/imo.svg',
                    url: 'https://www.e-imo.com/'
                },
                {
                    name: 'Microsoft',
                    img: '../assets/img/sponsors/jobfair/gigabyte/microsoft.jpg',
                    url: 'https://www.microsoft.com/en-us/'
                },
                {
                    name: 'Northern Trust',
                    img: '../assets/img/sponsors/jobfair/gigabyte/northerntrust.jpg',
                    url: 'https://www.northerntrust.com/'
                },
                {
                    name: 'Qualtrics',
                    img: '../assets/img/sponsors/jobfair/gigabyte/qualtrics.png',
                    url: 'https://www.qualtrics.com/'
                },
                {
                    name: 'Bank of America',
                    img: '../assets/img/sponsors/jobfair/gigabyte/bankofamerica.jpg',
                    url: 'https://www.bankofamerica.com/'
                }

            ],

            tier4: [
                {
                    name: 'Amobee',
                    img: '../assets/img/sponsors/jobfair/megabyte/amobee.jpg',
                    url: 'https://amobee.com'
                },
                {
                    name: 'Buildout',
                    img: '../assets/img/sponsors/jobfair/megabyte/buildout.png',
                    url: 'https://buildout.com/'
                },
                {
                    name: 'CME Group',
                    img: '../assets/img/sponsors/jobfair/megabyte/cmegroup.jpg',
                    url: 'https://www.cmegroup.com/'
                },
                {
                    name: 'Facebook',
                    img: '../assets/img/sponsors/jobfair/megabyte/facebook.png',
                    url: 'https://www.facebook.com/'
                },
                {
                    name: 'Gartner',
                    img: '../assets/img/sponsors/jobfair/megabyte/gartner.png',
                    url: 'https://www.gartner.com/technology/home.jsp'
                },
                {
                    name: 'Google',
                    img: '../assets/img/sponsors/jobfair/megabyte/google.png',
                    url: 'https://www.google.com/'
                },
                {
                    name: 'Indeed',
                    img: '../assets/img/sponsors/jobfair/megabyte/indeed.jpg',
                    url: 'https://www.indeed.com/'
                },
                {
                    name: 'Morningstar',
                    img: '../assets/img/sponsors/jobfair/megabyte/morningstar.png',
                    url: 'https://www.morningstar.com/'
                },
                {
                    name: 'Navtalent',
                    img: '../assets/img/sponsors/jobfair/megabyte/navtalent.png',
                    url: 'http://navtalent.com/'
                },
                {
                    name: 'NccGroup',
                    img: '../assets/img/sponsors/jobfair/megabyte/nccgroup.jpg',
                    url: 'https://www.nccgroup.trust/us/'
                },
                {
                    name: 'Pinterest',
                    img: '../assets/img/sponsors/jobfair/megabyte/pinterest.jpg',
                    url: 'https://www.pinterest.com/'
                },
                {
                    name: 'Sandia',
                    img: '../assets/img/sponsors/jobfair/megabyte/sandia.jpg',
                    url: 'http://www.sandia.gov'
                },
                {
                    name: 'Uber',
                    img: '../assets/img/sponsors/jobfair/megabyte/uber.png',
                    url: 'https://www.uber.com/'
                },
                {
                    name: 'West Monroe',
                    img: '../assets/img/sponsors/jobfair/megabyte/westmonroe.jpg',
                    url: 'http://www.westmonroepartners.com/'
                },
                {
                    name: 'Yelp',
                    img: '../assets/img/sponsors/jobfair/megabyte/yelp.png',
                    url: 'https://www.yelp.com/'
                },
                {
                    name: 'Riverbed',
                    img: '../assets/img/sponsors/jobfair/megabyte/riverbed.png',
                    url: 'https://www.riverbed.com/'
                },
                // startups

                {
                    name: 'a16z',
                    img: '../assets/img/sponsors/startups/andreessenhorowitz.png',
                    url: 'https://a16z.com/'
                },
                {
                    name: 'Buildout',
                    img: '../assets/img/sponsors/startups/buildout.png',
                    url: 'https://buildout.com/'
                },
                {
                    name: 'Cloudflare',
                    img: '../assets/img/sponsors/startups/cloudflare.svg',
                    url: 'https://www.cloudflare.com/'
                },
                {
                    name: 'Curalate',
                    img: '../assets/img/sponsors/startups/curalate.svg',
                    url: 'https://www.curalate.com/'
                },
                {
                    name: 'Fornojo',
                    img: '../assets/img/sponsors/startups/fornojo.png',
                    url: 'http://fornojollc.com/'
                },
                {
                    name: 'Granular',
                    img: '../assets/img/sponsors/startups/granular.jpg',
                    url: 'https://www.granular.ag/'
                },
                {
                    name: 'Liferay',
                    img: '../assets/img/sponsors/startups/liferay.png',
                    url: 'https://www.liferay.com/'
                },
                {
                    name: 'Mixmax',
                    img: '../assets/img/sponsors/startups/mixmax.png',
                    url: 'https://mixmax.com/'
                },
                {
                    name: 'Ocient',
                    img: '../assets/img/sponsors/startups/ocient.jpeg',
                    url: 'http://www.ocient.com/'
                },
                {
                    name: 'Rubrik',
                    img: '../assets/img/sponsors/startups/rubrik.png',
                    url: 'https://www.rubrik.com/'
                },
                {
                    name: 'Samsara',
                    img: '../assets/img/sponsors/startups/samsara.png',
                    url: 'https://www.samsara.com/'
                },
                {
                    name: 'Sprout Social',
                    img: '../assets/img/sponsors/startups/sproutsocial.png',
                    url: 'https://sproutsocial.com/'
                },
                {
                    name: 'Thing B1G',
                    img: '../assets/img/sponsors/startups/thinkbig.jpg',
                    url: 'http://thinkb1g.com/'
                },
                {
                    name: 'Jane Street',
                    img: '../assets/img/sponsors/jobfair/megabyte/janestreet.png',
                    url: 'https://www.janestreet.com/'
                },
                {
                    name: 'Capital One',
                    img: '../assets/img/sponsors/jobfair/megabyte/capitalone.png',
                    url: 'https://www.capitalone.com/'
                },
                {
                    name: 'Huawei',
                    img: '../assets/img/sponsors/jobfair/megabyte/huawei.png',
                    url: 'http://www.huawei.com/us/'
                },


            ]
        }

        const tier1Sponsors = sponsorsList.tier1.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={6} md={6} className="Sponsors__centeredCard">
                    <a href={sponsor.url}>
                        <Panel className="Sponsors__card Sponsors__card--tier1">
                            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name}/>
                        </Panel>
                    </a>
                </Col>
            )
        });

        const tier2Sponsors = sponsorsList.tier2.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={4} md={4} className="Sponsors__centeredCard">
                    <a href={sponsor.url}>
                        <Panel className="Sponsors__card Sponsors__card--tier2">
                            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name}/>
                        </Panel>
                    </a>
                </Col>
            )
        });

        const tier3Sponsors = sponsorsList.tier3.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={4} md={4}>
                    <a href={sponsor.url}>
                        <Panel className="Sponsors__card Sponsors__card--tier3">
                            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name}/>
                        </Panel>
                    </a>
                </Col>
            )
        });

        const tier4Sponsors = sponsorsList.tier4.map( (sponsor, idx) => {
            return(
                <Col key={idx} xs={12} sm={3} md={3}>
                    <a href={sponsor.url}>
                        <Panel className="Sponsors__card Sponsors__card--tier4">
                            <img className="Sponsors__cardLogo" src={sponsor.img} alt={sponsor.name}/>
                        </Panel>
                    </a>
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
