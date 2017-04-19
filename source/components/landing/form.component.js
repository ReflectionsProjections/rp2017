import React, { Component } from 'react'
import superagent from 'superagent'

import styles from './form.component.scss'

class Form extends Component {

    constructor() {
        super();

        this.submit = this.submit.bind(this);
    }

    submit(callback) {
        callback();
    }

    render() {
        return(
            <div>
                <h1 className="registration-date">Sign up for updates</h1>
                <br />

                <div id="mc_embed_signup">
                    <form action="//uiuc.us4.list-manage.com/subscribe/post?u=0628ea3ae6ae669985da21668&amp;id=9880231267" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate onSubmit={e => (this.submit(this.props.next.bind(this.props, e)))}>
                        <div id="mc_embed_signup_scroll">

                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL"></label>
                                <input className="registration-email" type="text" placeholder="Email Address" name="EMAIL" id="mce-EMAIL" />
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response"></div>
                                <div className="response" id="mce-success-response"></div>
                            </div>
                            <div className="safety" aria-hidden="true"><input type="text" name="b_0628ea3ae6ae669985da21668_9880231267" tabIndex="-1" value="" /></div><br/>
                            <div className="clear">
                                <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Form