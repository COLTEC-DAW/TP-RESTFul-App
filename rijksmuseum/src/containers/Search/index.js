import React from 'react'
import NavBar from '../../components/NavBar'
import List from '../../components/List'

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.state = {
      'sorting':'',
      'query': ''
    }
  }

  componentDidMount () {
    this.setState({
      'sorting' : this.props.match.params.sorting,
      'query': this.props.match.params.query
    })
  }

  render () {
    let list = (<List sorting={this.props.match.params.sorting} query={decodeURI(this.props.match.params.query)}></List>)

    return (
      <div>
        <NavBar/>
        {list}
      </div>
    )
  }
}

export default Search
