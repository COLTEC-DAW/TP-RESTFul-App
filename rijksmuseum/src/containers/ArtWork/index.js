import React from 'react'
import { API_ENDPOINT, API_KEY, MASHAPE_KEY } from '../../constants.js'


class ArtWork extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'objectNumber':this.props.match.params.id,
      'title':'',
      'image':'',
      'imagePosition': '',
      'imageX':'',
      'imageY':'',
      'description':'',
      'painter':{
        'name': '',
        'placeOfBirth':'',
        'dateOfBirth':'',
        'placeOfDeath':'',
        'dateOfDeath':''
      },
      'materials': [],
      'dating':''
    }
  }

  componentWillMount () {

    let request_url = API_ENDPOINT + 'collection/' + this.props.match.params.id+ '?key=' + API_KEY + '&format=json'
    let requestOptions = {
      method: 'GET',
      headers: {
        "Accept": "text/plain",
        "X-Mashape-Key": MASHAPE_KEY
      }
    }
    fetch(request_url, requestOptions)
      .then((response) => response.json())
      .then((response) => response.artObject)
      .then(response => {
        if(response){
          this.setState({
            title: response.title,
            image: response.webImage.url,
            description: response.plaqueDescriptionEnglish,
            painter:{
              name: response.principalMakers[0].name,
              placeOfBirth: response.principalMakers[0].placeOfBirth,
              dateOfBirth: response.principalMakers[0].dateOfBirth,
              placeOfDeath: response.principalMakers[0].placeOfDeath,
              dateOfDeath: response.principalMakers[0].dateOfDeath
            },
            dating: response.dating.sortingDate,
            materials: response.materials,
            imageX: response.webImage.height,
            imageY: response.webImage.width
          })

          if(response.webImage.width > response.webImage.height)
            this.setState({'imagePosition':'h'})
          else
            this.setState({'imagePosition':'v'})

        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let materials = this.state.materials.join()
    let image
    if(this.state.image){
      if(this.state.imagePosition === 'h')
       image = (
         <div
           style = {{
             'backgroundImage': 'url("' + this.state.image + '")',
             'backgroundPosition': 'center',
             'height':'100vh',
             'position':'relative',
             'backgroundRepeat': 'no-repeat',
             'backgroundSize': 'cover',
             'padding':'0'
           }}></div>
       )
      else
      image = (
        <img
          className={'mx-auto d-block text-center img-fluid'}
          src={this.state.image}
          alt="Some pic"
          style = {{
            'backgroundPosition': 'center',
            'height':'100vh',
            'position':'relative',
            'align':'center',
            'justify':'center',
            'backgroundRepeat': 'no-repeat',
            'padding':'0'
          }}></img>
      )
    }
    return (
      <div
        style={{
          'height':'100%',
          'padding':'0',
          'margin':'0',
          'backgroundColor':'black'
        }}>
        {image}
        <div style={{'position': 'absolute', 'width': '100%', 'bottom': '0', 'background': 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))'}}>
          <p className="" style={{'fontFamily': 'Inconsolata', 'fontSize': '1.15em', 'color':'#FFF', 'paddingLeft':'1%'}}>
            {this.state.title}, {this.state.painter.name}, {this.state.dating}
          </p>
          <p className="d-none d-md-block" style={{'fontFamily': 'Inconsolata', 'fontSize': '0.8em', 'color':'#afa9a9', 'paddingLeft':'1%'}}>
            {materials}
          </p>
          <p className="d-none d-md-block" style={{'fontFamily': 'Inconsolata', 'fontSize': '0.9em', 'color':'#FFF', 'paddingLeft':'1%'}}>
            {this.state.description}
          </p>
        </div>
      </div>
    )
  }
}

export default ArtWork;
