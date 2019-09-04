import ReactGA from 'react-ga';
import React from 'react';
import './styles/App.css'
import HomePage from './pages/HomePage.js'

function initializeReactGA() {
    ReactGA.initialize('UA-147078244-1');
    ReactGA.pageview('/homepage');
}

class App extends React.Component {
    render() {
        return (
            <div>

                <HomePage/>



            </div>
        )
    }
}

export default App;
