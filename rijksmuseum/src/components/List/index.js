import React from 'react'
import {API_ENDPOINT, API_KEY, MASHAPE_KEY} from '../../constants.js'
import ListMember from '../ListMember'


class List extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
      'works': []
    }
  }

  componentDidMount () {
    let request_url = API_ENDPOINT + 'collection/?key=' + API_KEY + '&format=json&s=' + this.props.sorting + '&query=' + encodeURI(this.props.query)
    let requestOptions = {
      method: 'GET',
      headers: {
        "Accept": "text/plain",
        "X-Mashape-Key": MASHAPE_KEY
      }
    }
    fetch(request_url, requestOptions)
      .then((response) => response.json())
      .then(response => {
        if(response){
          let aux = this.state.works
          response.artObjects.forEach(obj => aux.push(obj))
        } else {
          window.location.href = '/not-found';
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let list = this.state.works.map(obj =>(
      <ListMember obj={obj} key={obj._id}/>
    ))


    return (
      <div>
        {list}
      </div>
    )
  }
}

export default List
