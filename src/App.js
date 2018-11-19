import React, { Component } from 'react';
import key from './API/key';
import Navbar from './Components/Navbar/navbar'
import Gifs from './Components/Gifs/gifs'
import Detalhe from './Components/Detalhe/detalhe'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      giphys:[],
      selected:undefined
    }
  }

  setSelected = (gif) => {
    this.setState({selected:gif});
  }

  fetchSearch = (search) => {
    this.setState({selected:undefined})
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=36&lang=pt`)
     .then(resp => resp.json())
     .then(json => this.setState({giphys:json.data}))
     .catch(e => console.log(e))
  }

  fetchTrends = () => {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=36&lang=pt`)
     .then(resp => resp.json())
     .then(json => this.setState({giphys:json.data}))
     .catch(e => console.log(e))
  }

  fetchRandom = () => {
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`)
     .then(resp => resp.json())
     .then(json => {
       let gif = json.data;
       this.setState({selected:{
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
        }})
     })
     .catch(e => console.log(e))
  }

  render() {
    let body=undefined;
    if(this.state.giphys.length === 0 && !this.state.selected){
      this.fetchTrends();
    }
    if(!this.state.selected){
      body = (<Gifs setSelected={this.setSelected} gifs={this.state.giphys}/>);
    } else{
      body = (<Detalhe setSelected={this.setSelected} gif={this.state.selected}/>);
    }
    return (
      <div className="App">
        <Navbar fetchSearch={this.fetchSearch} fetchRandom={this.fetchRandom}/>
        {body}
      </div>
    );
  }
}

export default App;
