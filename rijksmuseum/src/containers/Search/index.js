import React from 'react'
import List from '../../components/List'
import Pagination from '../../components/PaginationMenu'
import { Container, Row, Col } from 'reactstrap'


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
      <Row style={{maxWidth: '100vw'}}>
        <Col>
          <div>{list}</div>
          <div>{pag}</div>
        </Col>
      </Row>
    )
  }
}

export default Search
