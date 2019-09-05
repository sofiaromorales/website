import React, { Component } from 'react';
import { Progress,Row, Col,  Typography } from 'antd';
import SkillRing from '../components/SkillRing'


import 'react-circular-progressbar/dist/styles.css';
const { Text } = Typography;

class Skills extends Component {

    render() {
        return(


            <Row id='Skills' type="flex" justify="center" >

                <Col span={24} md={18}>

                    <p style = {{
                        fontSize: '28px',
                        textAlign: 'center',
                        color:'#363636'
                    }}>
                        Skills
                    </p>
                    <Row type="flex" justify="space-around" >
                        <Col md={24}>
                            <SkillRing skill='Swift' percentage='80' color1='#3F45D2' color2='#EE7752'/>
                            <SkillRing skill='Design' percentage='95' color1='#B30FB0' color2='#43BAA6'/>
                        </Col>
                        <Col md={24}>
                            <SkillRing skill='React' percentage='75'/>
                            <SkillRing skill='Python' percentage='75'/>
                        </Col>
                    </Row>

                </Col>



            </Row>
        );
    }
}

export default Skills;
