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
        return(
            <div id='Hero'>
                <Row type= 'flex' gutter={16} >
                    <Col md={24} style={{height:70}}></Col>
                    <Col md={1}></Col>
                    <Col md={11}>
                        <Title id = 'Title'>Sofia Rodriguez</Title>
                     </Col>
                     <Col md={11}>
                         <ul style={{
                             listStyleType: 'none',
                             position: 'absolute',
                             right: 20,
                         }}>
                             <li><NavigationSocialLinks link = "https://www.instagram.com/" target="_blank" title = "Instagram"/></li>
                             <li><NavigationSocialLinks link = "https://twitter.com/sofiarom_00" target="_blank" title = "Twitter"/></li>
                             <li><NavigationSocialLinks link = "https://github.com/sofiarm21" target="_blank" title = "Github"/></li>
                             <li><NavigationSocialLinks link = "mailto:sofiaromorales@gmail.com" title = "Email"/></li>
                         </ul>
                      </Col>
                     <Col md={1}></Col>
                </Row>
                <Row type="flex" justify="space-between" align="bottom" style = {{height:620}}>
                    <Col md={1}></Col>
                    <Col md={22}>
                        <ul style={{
                            listStyleType: 'none',
                        }}>
                            <li><NavigationBarLinks link = "#AboutMe" title = "About Me"/></li>
                            <li><NavigationBarLinks link = "#Projects" title = "Projects" style = {{fontSize:24}}/></li>
                        </ul>
                    </Col>
                    <Col md={1}></Col>
                </Row>

            </div>
        );
    }
}

export default Hero;
