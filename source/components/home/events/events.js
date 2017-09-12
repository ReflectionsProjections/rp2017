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
                <Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
                  <h4>More details to be announced!</h4>
                    <p>Check back later for scheduling details. <br />In the meantime, make sure you're <a href="#">registered for the conference!</a></p>
                </Alert>
            </div>
        )
    }
}

export default Events
