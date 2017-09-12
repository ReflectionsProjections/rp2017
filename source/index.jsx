import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';
import Landing from './components/landing/landing';


// Redirects
const SponsorLetter = () => {
    window.location = './assets/files/sponsor.pdf';
    return null;
};

const StartupLetter = () => {
    window.location = './assets/files/startup.pdf';
    return null;
};

const Fugger = () => {
    window.location = 'https://docs.google.com/document/d/1yIJBJIemNGIDZb5DfH84_gR0-56z-gUHHPM3t2GIDYE/edit?usp=sharing';
    return null;
};

const FuggerSignup = () => {
    window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSdTVtjEyBhrDqH9PU9B9vz1s4_accHnAR1xkYY7DMROukCHwA/viewform';
    return null;
};

require('normalize.css');
require('./styles/main.scss');

class App extends React.Component {
    render () {
        return(
            <div className="main">Hello World</div>
        )
    }
}

render(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sponsor" component={SponsorLetter} />
            <Route path="/startup" component={StartupLetter} />
            <Route path="/home" component={Home} />
            <Route path="/fugger" component={Fugger} />
            <Route path="/fugger-signup" component={FuggerSignup} />
        </div>
    </Router>,
    document.getElementById('app')
);
