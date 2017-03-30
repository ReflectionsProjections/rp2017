import React, { Component } from 'react'

import styles from './done.component.scss'

class Done extends Component {

    constructor() {
        super()
    }

    
    render() {
        return(
            <div className="registration">
                <h1 className="registration-date">You're all set!</h1>

                <div className="registration-info">
                    <p className="thin">We'll be in touch whenever we have any updates for you!</p><br/>
                    <a className="button btn-1" onClick={this.props.next}>
                        Back to Home
                    </a>
                </div>
            </div>
        )
    }
}

export default Done