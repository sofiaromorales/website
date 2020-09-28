import React from 'react'
import { Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
    font-size:35px;
    stroke-width: 2px solid;
    stroke-color:purple;
    color:purple;
    &:hover {
        text-decoration: none;
        color:purple;

    }
`

const Entry = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`

const NavigationBar = ({
    postsPage
}) => {
    return(
        <Row className='py-3 justify-content-center'>
            <Col xs={9}>
                <Row className='justify-content-center'>
                    <Col xs='auto' className='mr-auto'>
                        <Title
                            to={`/`}
                            className='font-weight-bold'
                        >
                            Sofia Rodriguez
                        </Title>
                    </Col>

                    {
                        // <Col xs='auto'>
                        //     <Row>
                        //         <Link
                        //             className='text-secondary text-right mt-3 ml-4'
                        //             to='/Instagram'
                        //         >
                        //             Email
                        //         </Link>
                        //         <Link
                        //             className='text-secondary text-right mt-3 ml-4'
                        //             to='/Instagram'
                        //         >
                        //             Twitter
                        //         </Link>
                        //         <Link
                        //             className='text-secondary text-right mt-3 ml-4'
                        //             to='/Instagram'
                        //         >
                        //             Github
                        //         </Link>
                        //         <Link
                        //             className='text-secondary text-right mt-3 ml-4'
                        //             to='/Instagram'
                        //         >
                        //             Instagram
                        //         </Link>
                        //     </Row>
                        // </Col>
                    }
                </Row>
            </Col>
            <Col xs={1}/>
            {
                postsPage &&
                <Col xs={12}>
                    <hr/>
                </Col>
            }
            <Col xs={1}/>
        </Row>
    )
}

export default NavigationBar
