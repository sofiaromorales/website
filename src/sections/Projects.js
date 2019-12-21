import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col } from 'antd';



import zuma from '../assets/images/Zuma.png'
import kosaraju from '../assets/images/Kosaraju.png'
import drawing from '../assets/images/drawing.png'
import soundBox from '../assets/images/soundBox.png'




class Projects extends Component {

    render() {
        return(
            <Row id='Projects'>
                <Col md={2} span={1}>
                </Col>
                <Col md={20} span={22}>
                <p style = {{
                    fontSize: '28px',
                    textAlign: 'center',
                    color: '#363636'
                }}>
                    Projects
                </p>
                    <Row type="flex" justify="space-around">
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={zuma}   alt='Zuma'/>
                                <p>
                                    A basic game inspired by Zuma from Match3Games (link to https://www.match3games.com/game/Zuma?)
                                    Made in Java
                                </p>
                            </div>
                        </Col>
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={kosaraju}   alt='Kosaraju'/>
                                <p >
                                A program that finds the most strongly-connected components of a graph
                                Made in Python
                                </p>
                            </div>
                        </Col>
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={drawing}   alt='Drawing War'/>
                                <p >
                                A 1-player version of the game Pictionary, powered by machine learning
                                Made in Swift
                                </p>
                            </div>
                        </Col>
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={soundBox}   alt='Sound Box'/>
                                <p >
                                    My winner WWDC18 scholarship application.
                                </p>
                            </div>
                        </Col>
                        <Col md={12}>

                        </Col>
                    </Row>
                </Col>
                <Col md={2} span={1}>
                </Col>
            </Row>
        );
    }
}

export default Projects;
