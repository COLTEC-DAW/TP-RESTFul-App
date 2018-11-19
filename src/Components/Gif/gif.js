import React, { Component } from 'react';

class Gif  extends Component {

  render() {
    return (
      <div onClick={() => this.props.setSelected(this.props.gif)} className="Gif mt-2 mb-2 col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="mx-auto card">
            <img height="200px" src={this.props.gif.gif.imagemPreview} alt="Preview Gif" />
            <div className="card-body">
              <h6 className="text-center">{this.props.gif.gif.nome}</h6>
            </div>
        </div>
      </div>
    );
  }
}

export default Gif ;
