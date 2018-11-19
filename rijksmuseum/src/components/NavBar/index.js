import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'


import {
  Button, Input, InputGroup, InputGroupAddon, Row, Container,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav
} from 'reactstrap';


class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      sorting: '',
      query: ''
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onPress(sorting, query){
    if(sorting && query)
      window.location.href = '/search/'+ sorting + '/' + query + '/' + 1
  }

  handleInputChange(event){
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    console.log(this.state.sorting);

  }

  render () {
    return (
      <Container fluid={true} className="p-0">
          <Navbar className="px-4" style={{backgroundColor: 'rgb(117, 117, 113)', width: '100vw'}} color="light" light expand="md">
            <NavbarBrand className="py-1 px-0" style={{'color':'rgb(61, 59, 59)'}} href="/">rijksmuseum</NavbarBrand>
            <NavbarToggler className="py-1 px-0" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto py-1 " navbar>
                <Row>
                  <Input name="sorting" onChange={(event) => this.handleInputChange(event)} type="select" id="exampleSelect" className="col-md-6 col-sm-3" >
                    <option value=""> Sorting Options </option>
                    <option value={"relevance"}> relevance </option>
                    <option value={"chronologic"}> oldests </option>
                    <option value={"achronologic"}> newests </option>
                    <option value={"artist"}> artist </option>
                  </Input>

                  <InputGroup className="col-md-6 col-sm-7 ">
                    <Input name="query" value={this.state.query} onChange={(event) => this.handleInputChange(event)}/>
                    <InputGroupAddon addonType="append">
                      <Button
                        style={{'borderWidth':'5px !important', 'borderStyle': 'solid', 'borderColor':'#FFF !important'}}
                        color="secondary"
                        onClick={() => this.onPress(this.state.sorting, this.state.query)}
                        >
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Row>
              </Nav>
            </Collapse>
          </Navbar>
      </Container>
    )
  }
}

export default NavBar
