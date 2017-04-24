import React, { Component } from 'react'

import styles from './registration.component.scss'

import Information from './information.component'
import Form from './form.component'
import Done from './done.component'

import PastSpeakers from './pastspeakers.component'

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
        let Page;
        switch (this.state.step) {
            case 1:
                Page = <Information next={this.nextStep} />;
                break;
            case 2:
                Page =  <Form next={this.nextStep} />;
                break;
            case 3:
                Page =  <Done next={this.restart} />
                break;
            default:
                Page = null
                break;
        }

        return (
            <div className="registration">
                {Page}
                <PastSpeakers />
            </div>
        )
    }
}

export default Registration
