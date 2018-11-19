import React, { Component } from 'react'

const ImageSlide = (props) => {
  const frame_style = {
  	width: '80%',
    maxHeigth: '60vh',
    objectFit: 'cover'
  }

  return (
    <div className="image-slide" style={frame_style}>
      <img style={{'maxHeight':'100vh', 'overflow':'hidden'}} src={props.url}></img>
    </div>
  )
}

export default ImageSlide
