import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col, Typography } from 'antd';
const { Text, Paragraph } = Typography;


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

                    <Col span={5}/>
                    <Col span={14}>
                        <Text style = {{
                            fontSize: '48px',
                        }}>
                            Sofia Rodriguez
                        </Text>
                    </Col>
                    <Col span={5}/>
                    <Col span={1}/>
                    <Col span={22}>
                        <Paragraph>Hello! I’m a 19 years developer from Caracas, Venezuela.</Paragraph>
                        <Paragraph>I create websites, apps (iOS) and design.</Paragraph>
                        <Paragraph>I have attended to the Apple Worldwide Developers Confrence three times as an Apple scholar.</Paragraph>
                        <Paragraph> My main goal is turn ideas into reality creating beautiful and engaging products. </Paragraph>
                        <Paragraph>Interested in working together? Just shoot me a message and let’s see what I can do for you!.</Paragraph>
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
