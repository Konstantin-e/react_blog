import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {

  const [search , setSearch] = useState(false)

  const submitSearch = e => {
    e.preventDefault();
    alert('works')
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className=""> 
      {/* <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/post">Posts</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul> */}
      {/* <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search..." />
          <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
        </form>
      </div> */}
    </div>
  )
}
