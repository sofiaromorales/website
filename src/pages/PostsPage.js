import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'


import NavigationBar from '../components/NavigationBar'
import Footer from '../sections/Footer'

const Entry = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`

const EntryCard= styled(Row)`
    border-radius: 7px
    transition: .3s;

    &:hover {
        box-shadow: 5px 0 11px rgba(51, 20, 84,.1), -5px 0 11px rgba(51, 20, 84,.1), 0 5px 11px rgba(179, 15, 176,.1), 0px -5px 11px rgba(91, 184, 80,.1);
    }
`


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
        const title = post.slice(0, post.indexOf('_',1))
        const date = post.slice(post.indexOf('_',1) + 1, -3)
        return ({
            link: post,
            title: title,
            date: date
        })
    }

    sortPostsByDate = (posts) => {
        posts.sort((postA, postB) => {
            const datePostA = postA.slice(postA.indexOf('_',1) + 1, -3)
            const datePostB = postB.slice(postB.indexOf('_',1) + 1, -3)
            console.log('datePostA');
            console.log(datePostA);
            console.log('datePostB');
            console.log(datePostB);
            if (moment(datePostA) >moment(datePostB)){
                console.log(postA);
                console.log('>');
                console.log(postB);
                return -1
            }else if (moment(datePostA) < moment(datePostB)){
                return 1
            }else{
                return 0
            }
        })
        console.log('posts');
        console.log(posts);
        return posts
    }

    renderPostsWrappers = () => {
        const {
            posts
        } = this.state

        const postsSorted = this.sortPostsByDate(posts)
        console.log('postsSorted');
        console.log(postsSorted);
        return postsSorted.map(t => {
            const postInfo = this.getPostsTitles(t)
            return (
                <Entry
                    to={`/posts/${postInfo.link}`}
                >
                <EntryCard className='my-3 p-4 border'>

                    <Col >

                            <h3 className='mb-0'>
                                {postInfo.title}
                            </h3>

                    </Col>
                    <Col xs='auto' className='align-self-end'>
                        <p className='mb-0 text-secondary'>
                            {moment(postInfo.date).format('MMMM Do YYYY')}
                        </p>
                    </Col>

                </EntryCard>
                    </Entry>

            )
        })
    }


    render(){

        return(

            <Row className='justify-content-center'>
                <Col xs={12} className=''>
                    <NavigationBar/>
                </Col>
                <Col xs={10} className='mt-5'>

                    {
                        this.state.posts &&
                        <>
                            {this.renderPostsWrappers()}
                        </>
                    }
                </Col>
                {
                    // <Col xs={12} className='align-self-end'>
                    //     <Footer/>
                    // </Col>
            }

            </Row>



        )
    }
}

export default PostsPage
