
import React from 'react'
import SmallCard from 'components/StudentCard'
import API_ENDPOINT from '../constants.js'


class SideBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {

  }

  componentDidMount () {
    let requestOptions = {
      method: 'GET',
      headers: {
      // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt': this.props.jwt
      }
    }
    fetch(`${BACKEND_URL}/consultaAtual`, requestOptions)
    .then(response => {
      if (response.status == 401) {
        this.props.userSignedOut()
      }
      return response
    })
    .then(response => response.json())
    .then(response => {
      this.setState({name: response.nome})
    })



  render () {

    return (

    )
  }
}

export default List
