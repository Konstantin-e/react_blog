import React from 'react'
import './style.css'
import Card from '../UI/Card'
import Logo from '../Logo'
import Navbar from '../Navbar'

export default function Hero() {
  return (
    <div>
      <Card>
      <Navbar />
        <div className="hero" style={{padding: '50px 0'}}> 
          <Logo />
        </div>
      </Card>
    </div>
  )
}
