import React, { Component } from 'react';
import './detalhe.css'

class Detalhe extends Component {

  render() {
    let user = undefined;
    if(this.props.gif.user.nome){
      user = (
        <div className="col-12 mb-5">
            <h4 className="text-center">Dados do Usuário</h4>
            <div className="row">
                <div className="col-5 col-md-2">
                  <img src={this.props.gif.user.imagem} alt="Usuario"/>
                </div>
                <div className="col-7 col-md-10">
                  <p>Nome: <a href={this.props.gif.user.link}>{this.props.gif.user.nome}</a></p>
                </div>
            </div>
        </div>
      );
    }
    return (
      <div className="Detalhe">
        <div className="container p-2 mt-1">
          <a href="#" onClick={() => this.props.setSelected(undefined)} className="fas d-block  mb-2 float-right fa-times mr-1"></a>
        </div>
        <div className="container mt-3 p-3">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img className="mx-auto" height="200px" src={this.props.gif.gif.imagemOriginal} alt="Flowers in Chania" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <h2 className="text-center p-2">{this.props.gif.gif.nome}</h2>
                        <p>Id: {this.props.gif.gif.id}</p>
                        <p>Postado em: {this.props.gif.gif.postTime}</p>
                        <p>Score: {this.props.gif.gif.score}</p>
                        <p>Link: <a href={this.props.gif.gif.imagemOriginal}>{this.props.gif.gif.imagemOriginal}</a></p>
                        <hr/>
                        {user}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Detalhe;
