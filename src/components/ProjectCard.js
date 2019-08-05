import React, { Component } from 'react';
import { Row, Col } from 'antd';



const ProjectCard  =({
    image
}) => {

    return (

        <Row type='flex' justify='center'>
            <Col md = {24}>
                <img src={image} alt='Projcet' />
            </Col>
        </Row>
    )

}



export default ProjectCard;
