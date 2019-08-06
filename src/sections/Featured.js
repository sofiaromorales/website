import React, { Component } from 'react';
import { Row, Col } from 'antd';


import ucabista from '../assets/images/elucabista.png'
import abcu from '../assets/images/abcu.png'

class Featured extends Component {
    render() {
        return(
            <Row type="flex" justify="space-around" style={{marginTop:50, marginBottom:100}}>
            <Col md={1}>
            </Col>
                <Col md={11} className='imageHolder'>
                    <img src={ucabista} alt='elucabista.com'/>
                </Col>
                <Col md={11} className='imageHolder'>
                    <img src={abcu} alt='elucabista.com'/>
                </Col>
                <Col md={1} >
                </Col>


            </Row>
        );
    }
}

export default Featured;
