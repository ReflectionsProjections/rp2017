import React, { Component } from 'react'

import styles from './registration.component.scss'

import Information from './information.component'
import Form from './form.component'
import Done from './done.component'

class Registration extends Component {

    constructor() {
        super();
        this.state = {
            step: 1
        };

        this.nextStep = this.nextStep.bind(this);
        this.restart = this.restart.bind(this);
    }

    nextStep(event) {
        event.preventDefault();

        this.setState({
            step : this.state.step + 1
        });

        if (event.target.nodeName === "FORM") {
            event.target.submit()
        }
    }

    restart() {
        this.setState({
            step : 1
        });
    }

    render() {
        switch (this.state.step) {
            case 1:
                return <Information next={this.nextStep} />;
            case 2:
                return <Form next={this.nextStep} />;
            case 3:
                return <Done next={this.restart} />
        }
    }
}

export default Registration
