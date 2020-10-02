import ReactGA from 'react-ga';
import React from 'react';
import './styles/App.css'
import {
    Switch,
    Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage.js'
import PostsPage from './pages/PostsPage.js'
import PostContentPage from './pages/PostContentPage'

function initializeReactGA() {
    ReactGA.initialize('UA-147078244-1');
    ReactGA.pageview('/HomePage');
}

class App extends React.Component {

    componentDidMount(){
        initializeReactGA()
    }

    render() {
        return (
            <Switch>
                <Route path='/' exact>
                    <HomePage/>
                </Route>
                <Route path='/posts' exact>
                    <PostsPage/>
                </Route>
                <Route
                    name='postContent'
                    path='/posts/:id/:color1?/:color2?/:color3?/:color4?'
                    render={(props) => (
                        <PostContentPage
                            {...props}
                        />
                    )}
                    />
            </Switch>
        )
    }
}

export default App;
