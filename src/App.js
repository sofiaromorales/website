import ReactGA from 'react-ga';
import React from 'react';
import './styles/App.css'
import HomePage from './pages/HomePage.js'



function initializeReactGA() {
    ReactGA.initialize('UA-147078244-1');

}

class App extends React.Component {

    componentDidMount(){
        initializeReactGA()
    }

    render() {
        return (
            <div>

                <HomePage/>




            </div>
        )
    }
}

export default App;
