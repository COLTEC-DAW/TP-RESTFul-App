import React from 'react'
import { API_ENDPOINT, API_KEY } from '../../constants.js'
// import { Link } from 'react-router-dom'


class ArtWork extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        "X-Mashape-Key": "mn4uddDIV8mshCmdALohqzK2ZHU9p1k87m8jsnMrL7onzILla2"
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
            }
          })
        } else {
          console.log('nem existe');
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render () {
    return (
      <div></div>
    )
  }
}

export default ArtWork
