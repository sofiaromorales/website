import React, { Component } from 'react';
import { Row, Col } from 'antd';



const ProjectCard  =({
    image,
    githubProjectHandle
}) => {

    return (

        <Row type='flex' justify='center'>
            <Col md = {24}>
                <img src={image} alt='Projcet' onClick={() => window.open(`https://github.com/sofiarm21/${githubProjectHandle}`, '_blank');}/>
            </Col>
        </Row>
    )

}



export default ProjectCard;
