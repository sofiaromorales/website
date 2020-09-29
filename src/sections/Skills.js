import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import SkillRing from '../components/SkillRing'
import styled from 'styled-components'


import 'react-circular-progressbar/dist/styles.css';

const Icon = styled.img`
    height:50px;
    width:auto
`


class Skills extends Component {

    render() {
        return(


            <Row id='Skills' className='justify-content-center' >

                <Col xs={6}>

                    <p style = {{
                        fontSize: '28px',
                        textAlign: 'center',
                        color:'#363636'
                    }}>
                        Skills
                    </p>
                    <Row className='text text-center justify-content-center'>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510451-ce491780-01e4-11eb-95c0-d4e69d7fcd61.png'/>
                            <br/>
                            Swift
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510804-a8704280-01e5-11eb-808f-a5278f3fd1d1.png'/>
                            <br/>
                            JavaScript
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510457-d2753500-01e4-11eb-9ee6-64f4bba54138.png'/>
                            <br/>
                            React
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510514-f5074e00-01e4-11eb-9461-fbccbd55580b.png'/>
                            <br/>
                            Redux
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94512118-474a6e00-01e9-11eb-8232-3870284de904.png'/>
                            <br/>
                            NodeJS
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510437-c5f0dc80-01e4-11eb-9bf9-c411ef2ec042.png'/>
                            <br/>
                            Apollo Server
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510510-f2a4f400-01e4-11eb-9825-f1aeb5901896.png'/>
                            <br/>
                            GraphQL
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94510427-c25d5580-01e4-11eb-8d97-9280a587ea22.png'/>
                            <br/>
                            Git
                        </Col>
                        <Col xs='auto m-2'>
                            <Icon src='https://user-images.githubusercontent.com/49292858/94512333-cc358780-01e9-11eb-8b68-fe5390b8487e.png'/>
                            <br/>
                            UI & UX
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
