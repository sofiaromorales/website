import React from 'react'
import { Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const SecondFooter = ({

}) => {
    return(
        <Row className='justify-content-center my-5'>
            <Col xs={12}>
                <hr/>
            </Col>
            <a
                className='text-secondary text-right mt-3 ml-4'
                href='mailto:sofiaromorales@gmail.com'
            >
                Email
            </a>
            <a
                className='text-secondary text-right mt-3 ml-4'
                href='https://github.com/sofiarm21'
                target='_blank'
                rel='noopener noreferrer'
            >
                Github
            </a>
            <a
                className='text-secondary text-right mt-3 ml-4'
                href='https://twitter.com/sofiarom_00'
                target='_blank'
                rel='noopener noreferrer'
            >
                Twitter
            </a>
            <a
                className='text-secondary text-right mt-3 ml-4'
                href='https://www.instagram.com/sofiaro.m/?hl=es-la'
                target='_blank'
                rel='noopener noreferrer'
            >
                Instagram
            </a>
        </Row>
    )
}


export default SecondFooter
