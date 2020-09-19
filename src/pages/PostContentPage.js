import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

//const ReactMarkdown = require('react-markdown')

class PostContentPage extends Component{

    state = {
        post: null
    }

    componentDidMount(){
        if (this.props.match.params.id != null){
            fetch(`http://localhost:4000/api/fetchPost/${this.props.match.params.id}`)
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
                <Col xs={10} className=''>
                    <ReactMarkdown
                        source={this.state.post}
                    />
                </Col>
            </Row>
        )
    }

    render(){

        return (
            <Row>
                <Col xs={12}>
                {
                    this.state.post &&
                        <>
                            {this.renderPost(this.state.post)}
                        </>
                }
                </Col>
            </Row>
        )

    }
}

export default PostContentPage
