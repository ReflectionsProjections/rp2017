import React, { Component } from 'react'
import { PageHeader, Grid, Row, Media, Glyphicon } from 'react-bootstrap'

import styles from './styles.scss'

class Footer extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="Footer container">
                <Media>
                    <Media.Left>
                        <img width={80} height={80} src="../assets/svg/acm_box_logo.svg" alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <p className="Footer__contact"><Glyphicon glyph="earphone" /> +1 (217) 333-5828 <br /><Glyphicon glyph="envelope" /> conference-chair@acm.uiuc.edu <br/></p>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}

export default Footer
