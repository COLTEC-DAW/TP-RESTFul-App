import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nightwatch from "../../assets/nightwatch.jpg"
import farmers from "../../assets/farmers.jpg"
import gallery from "../../assets/gallery.jpg"
import windmill from "../../assets/windmill.jpg"
import { Card, CardImg, CardBody,
  CardTitle, CardImgOverlay, Button} from 'reactstrap';

class DemoCarousel extends Component {
    render() {
      let title_style = {
        'position': 'relative',
        'textAlign': 'center',
        'padding': '0',
        'paddingTop': '35%',
        'margin':'auto',
        'width': '80%',
        'color': 'white',
        'textShadow': '0 0 3px #000000',
        'fontSize': '1.4em'
      }
      return (
          <div className="container-fluid">
            <Carousel
              infiniteLoop
              autoPlay
              showThumbs={false}
              showStatus={false}
              style={{'backgroundColor':'white', 'maxHeight':'90vh !important', 'margin':'auto'}}>

                <div style={{'objectFit':'cover', 'maxHeight':'90vh'}}>
                    <img style={{'objectFit':'cover', 'height': '90vh'}} src={nightwatch} />
                    <CardImgOverlay className="p-0">
                      <CardTitle style={title_style}>NightWatch - Rembrandt van Rijn</CardTitle>
                    </CardImgOverlay>
                </div>
                <div style={{'objectFit':'cover', 'maxHeight':'90vh'}}>
                    <img style={{'objectFit':'cover', 'height': '90vh'}} src={farmers} />
                    <CardImgOverlay className="p-0">
                      <CardTitle style={title_style}>Farm in Provence - Vincent Van Gogh</CardTitle>
                    </CardImgOverlay>
                </div>
                <div style={{'objectFit':'cover', 'maxHeight':'90vh'}}>
                    <img style={{'objectFit':'cover', 'height': '90vh'}} src={gallery} />
                    <CardImgOverlay className="p-0">
                      <CardTitle style={title_style}> The Art Gallery of Jan Gildemeester Jansz - Rembrandt van Rijn</CardTitle>
                    </CardImgOverlay>
                </div>
                <div style={{'objectFit':'cover', 'maxHeight':'90vh'}}>
                    <img style={{'objectFit':'cover', 'height': '90vh'}} src={windmill} />
                    <CardImgOverlay className="p-0">
                      <CardTitle style={title_style}>The Windmill at Wijk bij Duurstede - Jacob Isaacksz</CardTitle>
                    </CardImgOverlay>
                </div>

            </Carousel>
          </div>
      )
    }
}

export default DemoCarousel
