import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';
import Landing from './components/landing/landing';

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
            <Route exact path="/" component={Landing}/>
        </div>
    </Router>,
    document.getElementById('app')
);