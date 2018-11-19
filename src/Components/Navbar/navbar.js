import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      search:""
    }
  }


  render() {
    return (
      <div className="Navbar sticky-top">
        <nav className="navbar navbar-dark bg-dark">
            <a href="/" className="navbar-brand text-light">GIPHY</a>
            <div className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Procure seu Giphy" value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})} />
              <button className="btn btn-outline-light my-2 my-sm-0" 
              onClick={()=>this.props.fetchSearch(this.state.search)}>Procurar</button>
              <button className="btn btn-outline-warning ml-2 my-2 my-sm-0"
              onClick={()=>this.props.fetchRandom()}>Random</button>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
