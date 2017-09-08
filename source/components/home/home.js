import React, { Component } from 'react'
import { } from 'react-bootstrap'

import styles from './styles.scss'

import Navigation from './navigation/navigation'
import About from './about/about'
import Events from './events/events'
import Speakers from './speakers/speakers'
import Tracks from './tracks/tracks'
import Sponsors from './sponsors/sponsors'
import Footer from './footer/footer'

class Home extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="Home">
                <Navigation />
                <About />
                <Speakers />
                <Tracks />
                <Events />
                <Sponsors />
                <Footer />
            </div>
        )
    }
}

export default Home
