import React, { Component } from 'react'
import { PageHeader, Grid, Row, Alert, Button } from 'react-bootstrap'

import styles from './styles.scss'

class Events extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div id="Events" className="Events container">
                <PageHeader className="Events__header">Schedule</PageHeader>
                {/* <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}> */}
                    <h3><Button href="http://reflectionsprojections.org/schedule" className="Events__button caps">View our schedule</Button></h3>
                {/* </Alert> */}
            </div>
        )
    }
}

export default Events
