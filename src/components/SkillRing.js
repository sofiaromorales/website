import React, { Component } from 'react';
import { Progress,Row, Col,  Typography } from 'antd';
import 'react-circular-progressbar/dist/styles.css';
const { Text } = Typography;

function SkillRing (props){
        return(
                    <Col md={8}>
                        <Row
                            type="flex"
                            justify="start"
                        >
                            <Col md={12}>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': props.color1,
                                        '100%': props.color2,
                                    }}
                                    percent={props.percentage}
                                />
                            </Col>
                            <Col md={3} >
                                <Text
                                    style ={{fontSize: 25, textAlign: 'left'}}
                                >
                                    {props.skill}
                                </Text>
                            </Col>
                        </Row>
                    </Col>


        );

}

export default SkillRing
