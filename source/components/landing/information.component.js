import React, { Component } from 'react'

import styles from './information.component.scss'

class Information extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h1 className="registration-date desktop">September 29th to October 1st, 2017</h1>
                <h1 className="registration-date mobile">Sep. 29th to Oct. 1st</h1>

                <div className="registration-info">
                    <p className="thin">Student-Run Tech Conference<br/>at the University of Illinois at Urbana-Champaign<br/>Proudly Hosted at the Siebel Center for Computer Science</p><br/>
                    <a className="button btn-1" onClick={this.props.next}>
                        Sign up for Updates
                    </a>
                </div>
            </div>
        )
    }
}

export default Information
