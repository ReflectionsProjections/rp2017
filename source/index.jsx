import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';
import Landing from './components/landing/landing';


// PDFs
const SponsorLetter = () => {
    window.location = './assets/files/sponsor.pdf';
    return null;
};

const StartupLetter = () => {
    window.location = './assets/files/startup.pdf';
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
            <Route path="/test" component={App} />
            <Route path="/sponsor" component={SponsorLetter} />
            <Route path="/startup" component={StartupLetter} />
        </div>
    </Router>,
    document.getElementById('app')
);