import React from 'react'
import { Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
    color:white;
    font-size:35px;
    &:hover {
        text-decoration: none;
        color:white;
    }
`

const Entry = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`

const NavigationBar = ({

}) => {
    return(
        <Row className='py-3'>
            <Col>
                <Title
                    to={`/`}
                    className='text-secondary font-weight-bold ml-5 pl-5'
                >
                    Sofia Rodriguez
                </Title>
            </Col>
        </Row>
    )
}

export default NavigationBar
