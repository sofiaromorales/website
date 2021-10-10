import React, { Component } from 'react';
import './HomeStyle.css'
import { Row, Col } from 'antd';
import { Typography } from 'antd';

import NavigationSocialLinks from '../components/NavigationSocialLinks'


const { Title } = Typography;


function NavigationBarLinks(props){
    return(
        <a  style = {{fontSize:24}} href={props.link}> {props.title}</a>
    );
}



class Hero extends Component {
    render() {
        //merge fix

        return(
            <Row
                id='Hero'
                style={{height:window.innerHeight}}
            >
                <Col span={2}/>
                <Col span={20}>
                <Row>
                        <Col span={24} style={{height:70}}/>
                        <Col md={12} span={24}>
                            <Title id = 'Title'>
                                Sofia Rodriguez
                            </Title>
                        </Col>
                        <Col md={12} span={24}>

                                 <li style={{float:'right'}}><NavigationSocialLinks link = "https://www.instagram.com/sofiaromorales/" target="_blank" title = "Instagram"/></li>
                                 <li style={{float:'right'}}><NavigationSocialLinks link = "https://twitter.com/sofiaromorales" target="_blank" title = "Twitter"/></li>
                                 <li style={{float:'right'}}><NavigationSocialLinks link = "https://github.com/sofiaromorales" target="_blank" title = "GitHub"/></li>
                                 <li style={{float:'right'}}><NavigationSocialLinks link = "mailto:sofiaromorales@gmail.com" title = "Email"/></li>

                        </Col>
                </Row>
                <Row style={{ height:window.innerHeight - 250}} align="bottom"  type="flex">
                    <Col md={24}>
                            <li><NavigationBarLinks link = "#AboutMe" title = "About Me"/></li>
                            <li><NavigationBarLinks link = "#Skills" title = "Skills" /></li>
                            <li><NavigationBarLinks link = "#Projects" title = "Projects"/></li>
                            <li><NavigationBarLinks link = '/posts' title = 'Blog'/></li>
                    </Col>
                </Row>

                </Col>
                <Col span={2}/>

            </Row>
        );
    }
}

export default Hero;
