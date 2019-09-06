import React, { Component } from 'react';


import Hero from '../sections/Hero'
import AboutMe from '../sections/AboutMe'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Featured from '../sections/Featured'
import Footer from '../sections/Footer'

import Divider from '../components/Divider'


class HomePage extends Component {
    render() {
        return(
            <div>
                console.log('hero')
                <Hero/>
                console.log('about')
                <AboutMe/>
                console.log('div')
                <Divider/>
                console.log('skills')
                <Skills/>
                console.log('div')
                <Divider/>
                console.log('projects')
                <Projects/>
                console.log('div')
                <Divider/>
                console.log('feaut')
                <Featured/>
                console.log('foot')
                <Footer/>
            </div>

        );
    }
}

export default HomePage;
