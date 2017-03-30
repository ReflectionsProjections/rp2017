import React, { Component } from 'react'

import Registration from './registration.component'

import styles from './landing.scss'

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <div className="hero">
                    <div className="hero-header">
                        <div className="hero-item left">
                            <div className="hero-item-title">
                                <h1 className="">reflections</h1>
                            </div>
                        </div>
                        <div className="hero-item center">
                            <div className="hero-item-title">
                                <img src="../assets/svg/logo.svg" />
                            </div>
                        </div>
                        <div className="hero-item right">
                            <div className="hero-item-title">
                                <h1 className="">projections</h1>
                            </div>
                        </div>
                    </div>

                    <Registration />
                </div>
            </div>
        )
    }
}

export default Landing