
import React from 'react'
import API_ENDPOINT from '../constants.js'


class List extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    let array = this.props.array
    let list = array.map(work, index => {
      <div key=index >
      
      </div>
    }

    return (
      {list}
    )
  }
}

export default List
