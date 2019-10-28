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
                <Col span={1} md={7}/>
                <Col span ={24} md={10} style={{
                    color:' #515151',
                    fontFamily: "Avenir",
                    fontSize: '20px',
                }}>
                    <p style = {{
                        fontSize: '48px',
                        textAlign: 'center',
                        color: '#363636',
                        fontFamily: "Avenir"
                    }}>
                        Sofia Rodriguez
                    </p>
                    <Col span={1}/>
                    <Col span={22}>
                        <p>Hello! I’m a 19 years developer from Caracas, Venezuela.</p>
                        <p>I create websites, apps (iOS) and design.</p>
                        <p>I have attended to the Apple Worldwide Developers Confrence three times as an Apple scholar.</p>
                        <p> My main goal is turn ideas into reality creating beautiful and engaging products. </p>
                        <p>Interested in working together? Just shoot me a message and let’s see what I can do for you!.</p>
                    </Col>
                        <Col span={6}/>
                        <Col span={12}>
                            <button type="button" onClick={handleLetsTalkClick} id="talkBtn">
                                Lets talk!
                            </button>
                        </Col>
                        <Col span={6}/>
                    <Col span={1}/>



                </Col>
                <Col span={1} md={7}/>




            </Row>
        );
    }
}

export default AboutMe;
