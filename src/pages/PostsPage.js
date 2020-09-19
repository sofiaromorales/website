import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'


class PostsPage extends Component{

    state = {
        posts: null,
    }

    componentDidMount(){

        fetch(`http://localhost:4000/api/fetchAllPosts`)
        .then(response =>{
            if (response.ok){
                return Promise.resolve(response)
            }else{
                throw new Error(response)
            }
        })
        .then(response => response.json())
        .then(response => {
            const posts = response
            this.setState({posts: posts})
        })
        .catch(error => {
            console.log('an error occurred:');
            console.log(error);
        })

    }

    getPostsTitles = (post) => {
        const link = post.slice(0, -3)
        const title = post.slice(2, post.indexOf('_',2))
        const date = post.slice(post.indexOf('_',2) + 1, -3)
        return ({
            link: post,
            title: title,
            date: date
        })
    }

    renderPostsWrappers = () => {
        const {
            posts
        } = this.state

        return posts.map(t => {
            const postInfo = this.getPostsTitles(t)
            return (
                <Link to={`/posts/${postInfo.link}`}>
                    <Row className='align-items-end'>
                        <Col xs='auto'>
                            <h3 className='mb-0'>
                                {postInfo.title}
                            </h3>
                        </Col>
                        <Col xs={6}>
                            <h5 className='mb-0'>
                                {postInfo.date}
                            </h5>
                        </Col>
                    </Row>
                </Link>
            )
        })
    }


    render(){

        return(
            <Row className='justify-content-center'>
                <Col xs={10} className=''>

                    {
                        this.state.posts &&
                        <>
                            {this.renderPostsWrappers()}
                        </>
                    }
                </Col>
            </Row>

        )
    }
}

export default PostsPage
