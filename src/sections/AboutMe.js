import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col } from 'antd';
import { Typography } from 'antd';


const { Title } = Typography;
const { Text } = Typography;

const handleLetsTalkClick = () => {
    window.open('mailto:sofiaromorales@gmail.com')
}

class AboutMe extends Component {

    render() {
        return(
            <Row id='AboutMe' >
                <Col md={7}>
                </Col>
                <Col md={10} style={{
                    top: '50px',
                    color:' #515151',
                    fontFamily: "Avenir",
                    fontSize: '20px',

                }}>
                    <p style = {{
                        fontSize: '28px',
                        textAlign: 'center'
                    }}>Sofia Rodriguez</p>
                    <p>Hello! I’m a 18 years developer from Caracas, Venezuela.</p>
                    <p>I do websites, apps (iOS) and design. My main goal is turn ideas into reality creating beautiful and engaging products. </p>
                    <p>Interested in working together? Just shoot me a message and let’s see what I can do for you!.</p>
                    <Row  type="flex" justify="center" style={{
                        margin: 50
                    }}>
                        <Col md={8}>
                            <button type="button" onClick={handleLetsTalkClick} id="talkBtn">Lets talk!</button>
                        </Col>
                    </Row>
                </Col>
                <Col md={7}>
                </Col>



            </Row>
        );
    }
}

export default AboutMe;
