import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import SkillRing from '../components/SkillRing'
import styled from 'styled-components'


import 'react-circular-progressbar/dist/styles.css';

const Icon = styled.img`
    height:20px;
    width:auto
`


class Skills extends Component {

    render() {
        return(


            <Row id='Skills' className='justify-content-center' >

                <Col xs={10}>

                    <p style = {{
                        fontSize: '28px',
                        textAlign: 'center',
                        color:'#363636'
                    }}>
                        Skills
                    </p>
                    <Row>
                        <Col xs={2}>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510451-ce491780-01e4-11eb-95c0-d4e69d7fcd61.png'/>
                            Swift
                        </Col>
                        <Col xs={2}>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510451-ce491780-01e4-11eb-95c0-d4e69d7fcd61.png'/>
                            Swift
                        </Col>
                        <Col xs={2}>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510451-ce491780-01e4-11eb-95c0-d4e69d7fcd61.png'/>
                            Swift
                        </Col>
                        <Col xs={2}>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510451-ce491780-01e4-11eb-95c0-d4e69d7fcd61.png'/>
                            Swift
                        </Col>
                    </Row>



                    {// <Row type="flex" justify="space-around" >
                    //     <Col md={24}>
                    //         <SkillRing skill='Swift' percentage='80'/>
                    //         <SkillRing skill='Design' percentage='95'/>
                    //     </Col>
                    //     <Col md={24}>
                    //         <SkillRing skill='React' percentage='75'/>
                    //         <SkillRing skill='Java' percentage='57'/>
                    //     </Col>
                    // </Row>
                }

                </Col>



            </Row>
        );
    }
}

export default Skills;
