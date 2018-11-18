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
    let sorting, query, p = ''

    if(this.props.sorting)
      sorting  = '&s=' + this.props.sorting
    if(this.props.query)
      query = '&q=' + encodeURI(this.props.query)
    if(this.props.page)
      p = '&p=' + this.props.page

    let request_url = API_ENDPOINT + 'collection/?key=' + API_KEY + sorting + query + p + '&format=json'
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
          this.setState({'works': aux})
        } else {
          window.location.href = '/not-found';
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    let list = []
      this.state.works.forEach(obj => {
      list.push(<ListMember obj={obj} key={obj.id}></ListMember>)
    })

    return (
      <div className="p-0 continer-fluid">
        {list}
      </div>
    )
  }
}

export default List
