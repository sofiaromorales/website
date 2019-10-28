import React, { Component } from 'react';
import { Row, Col } from 'antd';


import ucabista from '../assets/images/elucabista.png'
import abcu from '../assets/images/abcu.png'

class Featured extends Component {
    render() {
        return(
            <Row type='flex' justify="center" style={{marginTop:50, marginBottom:100}}>


                <Col md={10} span={13}>
                    <a href='http://elucabista.com/tag/sofia-rodriguez/' target='_blank'>
                        <img style = {{maxWidth:'100%', padding:25}} src={ucabista} alt='elucabista.com'/>
                    </a>
                </Col>
                <Col md={10} span={13}>
                    <a href='https://es.abcufoundation.org/sofia-rodriguez/' target='_blank'>
                        <img style = {{maxWidth:'100%', padding:25}} src={abcu} alt='elucabista.com'/>
                    </a>
                </Col>

            </Row>
        );
    }
}

export default Featured;
