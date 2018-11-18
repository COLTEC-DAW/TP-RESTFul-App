import React from 'react'

function ListMember (props) {
  let img = null
  if(props.obj.webImage)
    img = (<img src={props.obj.webImage.url} alt="pic of the art work"></img>)

  return (
    <div className="p-0 container-fluid" style={{'magin':'auto'}}>
      <p>{props.obj.objectNumber}</p>
      <p>{props.obj.title}</p>
      {img}
    </div>
  )
}

export default ListMember
