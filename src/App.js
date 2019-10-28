import ReactGA from 'react-ga';
import React from 'react';

import { withRouter, Route } from 'react-router-dom';

import './styles/App.css'
import HomePage from './pages/HomePage.js'
import Vlog from './pages/Vlog.js'

ReactGA.initialize('UA-147078244-1');

class App extends React.Component {
    render() {
        return (

            <div className='App'>
                <Route
                    exact
                    path='/'
                    render={(props) => (
                        <HomePage/>
                    )}
                />
                


            </div>

        )
    }
}

export default App;
