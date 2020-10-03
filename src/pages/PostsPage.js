import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'


import NavigationBar from '../components/NavigationBar'
import Footer from '../sections/Footer'
import SecondFooter from '../components/SecondFooter'

const backgroundColors = ['#5348cf', '#331454', '#3F45D2', '#B30FB0', '#E73C7E', '#EE7752', '#48cf8b', '#43BAA6',  '#3D488E', '#525fee']

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
const Hero = styled(Col)`
    background: linear-gradient(-45deg, ${props => props.color1}, ${props => props.color2}, ${props => props.color3});
    background-size: 400% 400%;
    height:100px;
    animation: Gradient 45s ease infinite;
    border-top-right: 7px;
    border-top-left: 7px;
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
            if (moment(datePostA) >moment(datePostB)){
                return -1
            }else if (moment(datePostA) < moment(datePostB)){
                return 1
            }else{
                return 0
            }
        })
        return posts
    }

    getRandomColor = () => {
        return backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    }

    renderPostsWrappers = () => {
        const {
            posts
        } = this.state

        const postsSorted = this.sortPostsByDate(posts)
        return postsSorted.map(t => {
            const color1=this.getRandomColor()
            const color2=this.getRandomColor()
            const color3=this.getRandomColor()
            const color4=this.getRandomColor()
            const postInfo = this.getPostsTitles(t)
            return (

                <Col xs={12} sm={6} lg={4} className='px-4'>
                    <Entry
                        to={`/posts/${postInfo.link}/${color1.substring(1)}/${color2.substring(1)}/${color3.substring(1)}/${color4.substring(1)}`}
                        params={{ color1: color1 }}
                    >
                        <EntryCard className='my-3 border bg-white'>
                            <Hero
                                xs={12}
                                color1={color1}
                                color2={color2}
                                color3={color3}
                                color4={color4}
                            />
                            <Col xs={12} className='p-4'>
                                <p className='mb-0 text-secondary mb-5'>
                                    {moment(postInfo.date).format('MMMM Do YYYY')}
                                </p>
                                <h3 className='mb-0 text-truncate'>
                                    {postInfo.title}
                                </h3>
                            </Col>
                        </EntryCard>
                    </Entry>
                </Col>



            )
        })
    }


    render(){

        return(

            <Row className='justify-content-center'>
                <Col xs={12} className=''>
                    <NavigationBar
                        postsPage
                    />
                </Col>
                <Col xs={10}>
                    <h1 className='mb-5'>
                        Me & my thoughts
                    </h1>
                    <h5>
                        Welcome to my blog, here you will find some of my thoughts and experiences, some abouth tech some not.
                    </h5>
                </Col>
                <Col xs={10} className='mt-5'>

                    {
                        this.state.posts &&
                        <Row className='justify-content-between'>
                            {this.renderPostsWrappers()}
                        </Row>
                    }
                </Col>
                {
                    // <Col xs={12} className='align-self-end'>
                    //     <Footer/>
                    // </Col>
            }
                <Col xs={10}>
                    <SecondFooter/>
                </Col>

            </Row>



        )
    }
}

export default PostsPage
