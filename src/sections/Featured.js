import React, { Component } from 'react';
import { Row, Col } from 'antd';


import ucabista from '../assets/images/elucabista.png'
import abcu from '../assets/images/abcu.png'

class Featured extends Component {
    render() {
        return(
            <Row type='flex' justify="space-around" style={{marginTop:50, marginBottom:100}}>
            <Col md={1}>
            </Col>
            <Col md={11} className='imageHolder'>
                <a href='http://elucabista.com/tag/sofia-rodriguez/' target='_blank'>
                    <img style = {{width:400}} src={ucabista} alt='elucabista.com'/>
                </a>
            </Col>
            <Col md={11} className='imageHolder'>
                <a href='https://es.abcufoundation.org/sofia-rodriguez/' target='_blank'>
                    <img style = {{width:400}} src={abcu} alt='elucabista.com'/>
                </a>
            </Col>
            <Col md={1}>
            </Col>


            </Row>
        );
    }
}

export default Featured;
