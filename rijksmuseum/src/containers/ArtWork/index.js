import React from 'react'
import { API_ENDPOINT, API_KEY, MASHAPE_KEY } from '../../constants.js'
// import { Link } from 'react-router-dom'


class ArtWork extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'objectNumber':this.props.match.params.id,
      'title':'',
      'image':'',
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
            materials: response.materials
          })
        } else {
          window.location.href = '/not-found';
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render () {
    let materials = this.state.materials.join()

    return (
      <div
        style={{
          'height':'100%',
          'padding':'0',
          'margin':'0',
        }}>

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
        <div style={{'position': 'absolute', 'bottom': '0', 'background': 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))'}}>
          <p style={{'fontFamily': 'Inconsolata', 'fontSize': '1.15em', 'color':'#FFF', 'paddingLeft':'1%'}}>
            {this.state.title}, {this.state.painter.name}, {this.state.dating}
          </p>
          <p style={{'fontFamily': 'Inconsolata', 'fontSize': '0.8em', 'color':'#afa9a9', 'paddingLeft':'1%'}}>
            {materials}
          </p>
          <p style={{'fontFamily': 'Inconsolata', 'fontSize': '0.9em', 'color':'#FFF', 'paddingLeft':'1%'}}>
            {this.state.description}
          </p>
        </div>
      </div>
    )
  }
}

export default ArtWork
