import React from 'react'
import {API_ENDPOINT, API_KEY, MASHAPE_KEY} from '../../constants.js'
import { Card, CardImg, CardText, CardLink, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

import nightwatch from '../../assets/nightwatch.jpg'

class Events extends React.Component { // eslint-disable-line react/prefer-stateless-function
constructor (props) {
  super(props)
  this.state = {
    events: [],
    date: ''
  }
}


componentWillMount () {
  let d = new Date();
  let date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate()
  this.setState({'date':date})


  console.log(date);

  let request_url = API_ENDPOINT + 'agenda/' + '2013-10-18' + '?key=' + API_KEY + '&format=json'
  let requestOptions = {
    method: 'GET',
    headers: {
      "Accept": "text/plain",
      "X-Mashape-Key": MASHAPE_KEY
    }
  }
  fetch(request_url, requestOptions)
    .then((response) => response.json())
    .then(response => {
      console.log(response.options);
      this.setState({'events':response.options})
    })

  }


  render (){
    let events = this.state.events.map((item) => {
      return (
        <Card>
          <CardImg top width="100%" src={nightwatch} alt="Card image cap" />
          <CardBody>
            <CardTitle>item.exposition.name</CardTitle>
            <CardSubtitle>item.exposition.price</CardSubtitle>
            <CardText>item.exposition.description</CardText>
          </CardBody>
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href={item.links[0]}>Availiability</CardLink>
            <CardLink href={item.links[1]}>Web</CardLink>
          </CardBody>
        </Card>
      )
    })

    if(this.state.events == 0){
      events = (
        <p>Uh, seems like theres nothing happening today. I mean, its quite dificult to make events everyday right?</p>
      )
    }

    return (

      <div >
        <h2 className="mt-5 ml-auto">happening  in {this.state.date}</h2>
        <div className="mt-2 px-2 ">
        {events}
        </div>

      </div>
    )
  }
}

export default Events
