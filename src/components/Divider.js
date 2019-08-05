import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Divider extends Component {

    render() {
        return(
            <Row type='flex' justify='center'>
                <Col md = {14} style={{
                    height:1,
                    background:'grey',
                    margin:50
                }}>

                </Col>
            </Row>
        );
    }
}

export default Divider;
