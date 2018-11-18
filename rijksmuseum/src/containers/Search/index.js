import React from 'react'
import NavBar from '../../components/NavBar'
import List from '../../components/List'
import Pagination from '../../components/PaginationMenu'


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
      'query': this.props.match.params.query,
      'page': this.props.match.params.page
    })
  }

  render () {
    let list = (<List sorting={this.props.match.params.sorting} page={this.props.match.params.page} query={decodeURI(this.props.match.params.query)}></List>)
    let page = 1

    if(this.state.page)
      page = this.state.page

    let pag = (<Pagination page={this.state.page}/>)

    return (
      <div>
        <NavBar  page={page}/>
        <div>{list}</div>
        <div>{pag}</div>
      </div>
    )
  }
}

export default Search
