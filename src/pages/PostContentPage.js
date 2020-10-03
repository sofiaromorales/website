import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'

import NavigationBar from '../components/NavigationBar'
import SecondFooter from '../components/SecondFooter'

import { API_ROOT } from '../constants'

const BackButton = styled(Col)`
    border-radius: 5px;
    background:white;
    border: 2px solid purple;
    color: purple;
    transition: .3s;
    font-size:15px;

    &:hover {
        background:purple;
        color: white;
        text-decoration: none;
    }
`

const Hero = styled(Col)`
    height:300px;
    background: linear-gradient(-45deg, ${props => props.color1}, ${props => props.color2}, ${props => props.color3});
    background-size: 400% 400%;
    animation: Gradient 45s ease infinite;
`

const StrippedBox = styled(Col)`
border: 2px dashed purple;

`

const renderers = {
        image: ({
            alt,
            src,
            title,
        }: {
            alt?: string;
            src?: string;
            title?: string;
        }) => (
            <img
                alt={alt}
                src={src}
                title={title}
                style={{ maxWidth: 500, display: 'block', marginRight: 'auto', marginLeft: 'auto' }}  />
        ),
    };

class PostContentPage extends Component{

    state = {
        post: null,
        title: '',
        date: null,
        time:null,
    }

    componentDidMount(){
        console.log('com m');
        if (this.props.match.params.id != null){
            console.log('this.props.match.params.i');
            fetch(`${API_ROOT}/fetchPost/${this.props.match.params.id}`)
                .then(response => {
                    if (response.ok){
                        return Promise.resolve(response)
                    }else{
                        throw new Error()
                    }
                })
                .then(response => response.text())
                .then(response => {
                    const post = response
                    this.setState({post: post})
                    this.setState({title: this.props.match.params.id.slice(0, this.props.match.params.id.indexOf('_',1))})
                    this.setState({date: this.props.match.params.id.slice(this.props.match.params.id.indexOf('_',1) + 1, -3)})
                    this.setState({time: post.slice(0, post.indexOf('\n',1))})
                })
                .catch(error =>{
                    console.log('An error ocurred:');
                    console.log(error);
                })
        }
    }

    renderPost = (post) => {

        return (
            <Row className='justify-content-center'>
                <Hero xs={12}
                    className=''
                    color1={`#${this.props.match.params.color1}`}
                    color2={`#${this.props.match.params.color2}`}
                    color3={`#${this.props.match.params.color3}`}
                    color4={`#${this.props.match.params.color4}`}
                >
                    <Row className='h-100'>
                        <Col className='my-auto'>
                            <h2 className='text text-center text-white font-weight-bold'>
                                {this.state.title}
                            </h2>
                        </Col>
                    </Row>
                </Hero>
                <Col xs={6} className='my-5'>
                    <Link to='/Posts' style={{color: 'purple'}}>
                        Back to posts
                    </Link>
                    <br/>
                    <br/>
                    <p>
                        {`${moment(this.state.date).format('MMMM Do YYYY')}  🔥 ${this.state.time}  🔥`}
                    </p>
                    <ReactMarkdown
                        source={this.state.post.slice(post.indexOf('\n',1))}
                        escapeHtml={false}
                        renderers={renderers}
                    />
                </Col>
            </Row>
        )
    }

    render(){

        return (
            <Row className='justify-content-center'>
                <Col xs={12} className=''>
                    <NavigationBar/>
                </Col>
                <Col xs={12}>
                {
                    this.state.post &&
                        <>
                            {this.renderPost(this.state.post)}
                        </>
                }
                </Col>
                <StrippedBox xs={6} className='p-5 mb-5 text text-center'>
                    {`If you liked this post and wants to chat feel free to send me an `}
                    <a href='mailto:sofiaromorales@gmail.com' style={{color:'purple'}}>
                         email
                    </a> or contact me via
                    <a href='https://twitter.com/sofiarom_00' style={{color:'purple'}}>
                        Twitter
                    </a> 💜
                </StrippedBox>
                <Col xs={12}/>
                <Col md={4} lg={3}>
                    <Link
                        to='/Posts'
                    >
                        <Row className='justify-content-center'>
                            <BackButton xs={6} className='py-2 px-4'>

                                    <p className='text text-center font-weight-bold mb-0'>
                                        {'Back to Posts'}
                                    </p>

                            </BackButton>
                        </Row>
                    </Link>
                </Col>
                <Col xs={10}>
                    <SecondFooter/>
                </Col>
            </Row>
        )

    }
}

export default PostContentPage
