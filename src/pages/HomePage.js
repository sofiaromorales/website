import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";


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
            <CookieConsent
                    location='bottom'
                    buttonText='Accept'
                    style={{ background: 'grey', color: 'black' }}
                    buttonStyle={{
                        background: 'white',
                        color: 'black',
                        fontSize: '13px'
                    }}
                >
                This website uses cookies
                </CookieConsent>
                <Hero/>
                <AboutMe/>
                <Divider/>
                <Skills/>
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
