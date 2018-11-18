import React from 'react'
import List from '../../components/List'
import Pagination from '../../components/PaginationMenu'
import NavBar from '../../components/NavBar'
import {Row, Col } from 'reactstrap'


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

    let pag = (<Pagination style={{'bottom':'0'}} page={page}/>)

    return (
      <Row style={{maxWidth: '100vw'}}>
        <NavBar />
        <Col>
          <div className="mt-3">{list}</div>
          <div className="mt-5">{pag}</div>
        </Col>
      </Row>
    )
  }
}

export default Search
