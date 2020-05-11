import React from 'react'
import './style.css'

export default function Card(props) {
  return (
    <div className="card" style={props.style} {...props}>
      {props.children}
    </div>
  )
}
