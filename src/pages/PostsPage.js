import React, { Component } from 'react'
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

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
        console.log(post.slice(2, - 3));
        const title = post.slice(2, - 3)
        return title
    }

    renderPostsWrappers = () => {
        const {
            posts
        } = this.state
        console.log('renderPostsWrappers');

        return posts.map(t => {
            console.log('t');
            console.log(t);
            return (
                <Row>
                    <Col>
                        <Title>
                            {this.getPostsTitles(t)}
                        </Title>
                    </Col>
                </Row>
            )
        })
    }


    render(){

        return(
            <Row justify="center">
                <Col span={2} md={7}/>
                <Col span={20} md={10}>
                postspage
                    {
                        this.state.posts &&
                        <>
                            {this.renderPostsWrappers()}
                        </>
                    }
                </Col>
                <Col span={2} md={7}/>
            </Row>

        )
    }
}

export default PostsPage
