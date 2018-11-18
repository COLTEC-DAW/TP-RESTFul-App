import React from 'react'

function ListMember (props) {
  let img = null
  if(props.obj.webImage)
    img = (<img style={{objectFit: 'cover', maxWidth: '80%'}} src={props.obj.webImage.url} alt="pic of the art work"></img>)

  return (
    <div>
      <p>{props.obj.objectNumber}</p>
      <p>{props.obj.title}</p>
      {img}
    </div>
  )
}

export default ListMember
