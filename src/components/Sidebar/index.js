import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'

export default function SideBar(props) {

  const [posts, setPosts] = useState([])
  
  useEffect(()=> {
    const posts = blogPost.data;
    setPosts(posts)
  }, posts)

  return (
    <div className="sidebarContainer">
      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box"}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="picture" />
        </div>
        <div className="cardBody">
        <p className="personalBio">Lorerm Ipsum Dolor Lorem Ipsum Dolor Lorerm Ipsum Dolor Lorem Ipsum Dolor</p>
        </div>
      </Card >
      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
          
        </div>
      </Card >

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: "border-box"}}>
        <div className="cardHeader">
          <span>Resent Posts</span>
        </div>

        <div className="recentPosts">
          <div>
            {posts.map(post => {
              return(
                <NavLink style={{textDecoration: "none"}} to={`/post/${post.id}`}>
                  <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
                </NavLink>
              )
            })}
          </div>
        </div>
      </Card>
    </div>
  )
}
