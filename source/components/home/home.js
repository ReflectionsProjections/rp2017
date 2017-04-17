import React, { Component } from 'react'

import styles from './home.scss'

import Events from './events.component'
import Speakers from './speakers.component'
import Sponsors from './sponsors.component'

class Home extends Component {

    constructor() {
        super()
    }
    
    render() {
        return(
            <div className="home">
                <Speakers />
                <Events />
                <Sponsors />
            </div>
        )
    }
}

export default Home
