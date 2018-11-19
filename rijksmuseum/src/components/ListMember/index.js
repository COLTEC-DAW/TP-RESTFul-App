import React from 'react'
import notfound from '../../assets/no-image.jpg'
import { Card, CardImg, CardTitle, CardImgOverlay, Button} from 'reactstrap';

class ListMember extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'works': []
    }
  }

  onPress(obj){
    if(obj)
      window.location.href = '/art-work/' + obj
      console.log('ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
  }

  render (){
    let img = notfound
    if(this.props.obj.webImage)
      img = this.props.obj.webImage.url

    let image_style = {
      'height': '270px',
      'objectFit': 'cover',
      'borderTopLeftRadius': '10px',
      'borderTopRightRadius': '10px'
    }

    let title_style = {
      'position': 'relative',
      'textAlign': 'center',
      'padding': '0',
      'paddingTop': '40%',
      'margin':'auto',
      'width': '80%',
      'color': 'white',
      'textShadow': '0 0 3px #000000',
      'fontFamily': "'Oswald', sans-serif",
      'fontSize': '1.4em'
    }

    return (
        <div>
          <Card className="mt-2 p-0">
            <CardImg className="p-0" style={image_style} top src={img} alt="Card image cap" />
              <CardImgOverlay className="p-0">
                <CardTitle style={title_style}>{ this.props.obj.title}</CardTitle>
              </CardImgOverlay>
          </Card>
          <Button className="my-4" onClick={() => this.onPress(this.props.obj.objectNumber)} style={{'color':'white'}}> See More </Button>
        </div>


    )
  }
}

export default ListMember
