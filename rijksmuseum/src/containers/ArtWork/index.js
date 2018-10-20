import React from 'react'
import { API_ENDPOINT, API_KEY } from '../../constants.js'
// import { Link } from 'react-router-dom'


class ArtWork extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
    }

  }

  componentDidMount () {

    let status
    let request_url = API_ENDPOINT + 'collection/' + this.props.match.params.id+ '?key=' + API_KEY + '&format=json'
    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(request_url, requestOptions)
      .then(response => {
        if (status == 200)
          console.log(response)
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
