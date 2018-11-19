import React, { Component } from 'react';
import Gif from '../Gif/gif'

class Gifs extends Component {


  render() {
    let body = [];
    if(this.props.gifs){
        let gifs = [];
        this.props.gifs.forEach(gif => {
            gifs.push({
                gif:{
                    id:gif.id,
                    nome:gif.title,
                    postTime:gif.import_datetime,
                    score:gif._score,
                    imagemOriginal:gif.images.original.url,
                    imagemPreview:gif.images.preview_gif.url
                },
                user:{
                    nome:gif.user!==undefined ? gif.user.username : "",
                    link:gif.user!==undefined ? gif.user.profile_url :"",
                    imagem:gif.user!==undefined ? gif.user.avatar_url : ""
                }
            });
        });
        gifs.forEach(gif=>{
            body.push(<Gif setSelected={this.props.setSelected} key={gif.gif.id} gif={gif}/>);
        })
    }


    return (
      <div className="Gifs mt-3">
        <div className="col-12 col-md-10 offset-md-1 row">
            {body}
        </div>
      </div>
    );
  }
}

export default Gifs;
