import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col, Typography } from 'antd';
const { Text, Paragraph } = Typography;


const handleLetsTalkClick = () => {
    window.open('mailto:sofiaromorales@gmail.com')
}

class AboutMe extends Component {

    render() {
        //merge fix
        
        return(
            <Row id='AboutMe'
                style={{
                    color:' #515151',
                    fontFamily: "Avenir",
                    fontSize: '20px'
                }}
            >
                <Col>
                    <p style = {{
                        fontSize: '48px',
                        textAlign:'center',
                    }}>
                        Sofia Rodriguez
                    </p>
                </Col>
                <Col span={2} md={7}/>
                <Col span={20} md={10}>
                        <Paragraph>Hello! I’m a developer from Caracas, Venezuela.</Paragraph>
                        <Paragraph>I create websites, iOS apps, and designs.</Paragraph>
                        <Paragraph>I have attended the Apple Worldwide Developers Confrence three times as an Apple scholar.</Paragraph>
                        <Paragraph> My main goal is turn ideas into reality creating beautiful and engaging products. </Paragraph>
                        <Paragraph>My main goal is to turn ideas into reality by creating beautiful and engaging products.
                        Interested in working together? Just shoot me a message and let’s see what I can do for you!</Paragraph>
                </Col>
                <Col span={2} md={7}/>

                <Col span={4} md={9}/>
                <Col span={16} md={6}>
                    <button type="button" onClick={handleLetsTalkClick} id="talkBtn">
                        Lets talk!
                    </button>
                </Col>
                <Col span={4} md={9}/>

            </Row>


        );
    }
}

export default AboutMe;
