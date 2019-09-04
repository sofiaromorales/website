import React, { Component } from 'react';
import { Progress,Row, Col,  Typography } from 'antd';


import 'react-circular-progressbar/dist/styles.css';
const { Text } = Typography;

class Skills extends Component {

    render() {
        return(
            <Row>
                <Row type="flex" justify="center" style={{padding:20}}>
                    <Col md={8} >
                        <Row type="flex" justify="start">
                            <Col md={9}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#331454',
                                        '100%': '#EE7752',
                                    }}
                                    percent={80}
                                />
                            </Col>
                            <Col md={6} >
                                <Text style ={{fontSize: 25, textAlign: 'left'}}>Swift</Text>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={8} >
                        <Row type="flex" justify="start">
                            <Col md={9}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#331454',
                                        '100%': '#EE7752',
                                    }}
                                    percent={95}
                                />
                            </Col>
                            <Col md={6} >
                                <Text style ={{fontSize: 25, textAlign: 'left'}}>Design</Text>
                            </Col>
                        </Row>
                    </Col>


                </Row>


                <Row type="flex" justify="center" style={{padding:20}}>
                    <Col md={8} >
                        <Row type="flex" justify="start">
                            <Col md={9}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#331454',
                                        '100%': '#331454',
                                    }}
                                    percent={75}
                                />
                            </Col>
                            <Col md={6}>
                                <Text style ={{fontSize: 25, textAlign: 'left'}}>React</Text>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={8} >
                        <Row type="flex" justify="start">
                            <Col md={9}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#331454',
                                        '100%': '#331454',
                                    }}
                                    percent={75}
                                />
                            </Col>
                            <Col md={6}>
                                <Text style ={{fontSize: 25, textAlign: 'left'}}>Phyton</Text>
                            </Col>
                        </Row>
                    </Col>


                </Row>

            </Row>
        );
    }
}

export default Skills;
