import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card_content'>
      <div>UserID: <span>{props.userId}</span></div>
      <div>Id: <span>{props.id}</span></div>
      <div>Title: <span>{props.title}</span></div>
      <div>Content: <span>{props.content}</span></div>
    </div>
  )
}

export default Card
