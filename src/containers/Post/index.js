import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'
import BlogPost from '../../components/BlogPost'
import SideBar from '../../components/Sidebar'

const Post = (props) => {

  console.log(props)
  return (
    <section className="container">
      Posts
      <BlogPost {...props} />
      <SideBar {...props} />
    </section>
  )
}

export default Post
