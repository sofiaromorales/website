import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col } from 'antd';


const handleLetsTalkClick = () => {
    window.open('mailto:sofiaromorales@gmail.com')
}

class AboutMe extends Component {

    render() {
        return(
            <Row id='AboutMe' >
                <Col md={7} span={1}>
                </Col>
                <Col md={10} span ={22} style={{
                    top: '50px',
                    color:' #515151',
                    fontFamily: "Avenir",
                    fontSize: '20px',

                }}>
                    <p style = {{
                        fontSize: '48px',
                        textAlign: 'center',
                        color: '#363636'
                    }}>
                        Sofia Rodriguez
                    </p>
                    <p>Hello! I’m a 19 years developer from Caracas, Venezuela.</p>
                    <p>I create websites, apps (iOS) and design.</p>
                    <p>I have attended to the Apple Worldwide Developers Confrence three times as an Apple scholar.</p>
                    <p> My main goal is turn ideas into reality creating beautiful and engaging products. </p>
                    <p>Interested in working together? Just shoot me a message and let’s see what I can do for you!.</p>
                    <Row  type="flex" justify="center" style={{
                        margin: 50
                    }}>
                        <Col md={8}>
                            <button type="button" onClick={handleLetsTalkClick} id="talkBtn">
                                Lets talk!
                            </button>
                        </Col>
                    </Row>
                </Col>
                <Col md={7} span={1}>
                </Col>



            </Row>
        );
    }
}

export default AboutMe;
