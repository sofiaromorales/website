import React, { Component } from 'react';


import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'
import Projects from '../sections/Projects'
import Featured from '../sections/Featured'
import Footer from '../sections/Footer'

import Divider from '../components/Divider'


class HomePage extends Component {
    render() {
        return(
            <div>
                <Hero/>
                <AboutMe/>
                <Divider/>
                <Projects/>
                <Divider/>
                <Featured/>
                <Footer/>
            </div>

        );
    }
}

export default HomePage;
