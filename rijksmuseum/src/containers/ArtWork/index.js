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
          'height':'100vh',
          'padding':'0',
          'margin':'0',
          'backgroundColor':'#000'

        }}>

        <div
          style = {{
            'backgroundImage': 'url("' + this.state.image + '")',
            'backgroundPosition': 'center',
            'height':'80%',
            'width':'100%',
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': 'cover',
            'backgroundColor':'rgba(0,0,0,0.8)',
            'padding':'0'
          }}></div>

        <p style={{'fontFamily': 'Inconsolata', 'fontSize': '0.95em', 'color':'#FFF', 'paddingLeft':'1%'}}>
          {this.state.title}, {this.state.painter.name}, {this.state.dating}
        </p>
        <p style={{'fontFamily': 'Inconsolata', 'fontSize': '0.75em', 'color':'#afa9a9', 'paddingLeft':'1%'}}>
          {materials}
        </p>
        <p style={{'fontFamily': 'Inconsolata', 'fontSize': '0.75em', 'color':'#FFF', 'paddingLeft':'1%'}}>
          {this.state.description}
        </p>

      </div>
    )
  }
}

export default ArtWork
