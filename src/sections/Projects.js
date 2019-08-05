import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col } from 'antd';
import { Typography } from 'antd';


import zuma from '../assets/images/Zuma.png'
import kosaraju from '../assets/images/Kosaraju.png'
import drawing from '../assets/images/drawing.png'


const { Title } = Typography;
const { Text } = Typography;



class Projects extends Component {

    render() {
        return(
            <Row id='Projects'>
                <Col md={2}>
                </Col>
                <Col md={20}>
                    <Row type="flex" justify="space-around">
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={zuma}   alt='Projcet'/>
                                <p >
                                    A basic game inspirated in the match-3 classic game Zuma <br></br>
                                    Made in Java
                                </p>
                            </div>
                        </Col>
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={kosaraju}   alt='Projcet'/>
                                <p >
                                    A program that finds  the strongly connected components of a graph <br></br>
                                    Made in Python
                                </p>
                            </div>
                        </Col>
                        <Col md={12} style={{marginTop:20}}>
                            <div className= 'ProjectContainer'>
                                <img src={drawing}   alt='Projcet'/>
                                <p >
                                    A Pictionary game for 1 player only powered by machine learning <br></br>
                                    Made in Swift
                                </p>
                            </div>
                        </Col>
                        <Col md={12}>

                        </Col>
                    </Row>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
        );
    }
}

export default Projects;
