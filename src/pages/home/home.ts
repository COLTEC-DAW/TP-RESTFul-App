import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //PROPRIEDADES  
  private location = {
    lat: null,
    lng: null
  };
  
  private banheiros = [
    {
      lat: -19.876290,
      lng: -43.930687,
      name: "Cantinho da Bernardo"
    },
    {
      lat: -19.877208,
      lng: -43.932221,
      name: "Trono da Santa Helena"
    },
    {
      lat: -19.876636,
      lng: -43.932412,
      name: "Porcelana de Roma"
    },
    {
      lat: -19.876030,
      lng: -43.931710,
      name: "Banheiro do Monstro"
    },
  ]
  
  map: GoogleMap;

  //CONSTRUTOR
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps
  ) {
  }
  
  //CARREGOU
  ionViewDidLoad() {
    this.getGeolocation();
  }

  //FUNCOES
  public getGeolocation(): void {
    this.geolocation.getCurrentPosition().then((answer) => {
      this.location.lat = answer.coords.latitude;
      this.location.lng = answer.coords.longitude;
      
      //Desenha o mapa
      this.loadMap();
    }).catch((error) => {
      // alert(error.message);
      
      this.location.lat = -19.8771371;
      this.location.lng = -43.9313414;
      
      //Desenha o mapa
      this.loadMap();
    });
  }
  
  public loadMap(): void {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.location.lat,
          lng: this.location.lng
        },
        zoom: 17,
        tilt: 0
      }
    };
    
    this.map = this.googleMaps.create('map', mapOptions);
    
    // //Quando mapa estiver pronto
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      //Adiciona marcador do usuario
      this.map.addMarker({
        title: 'Você',
        icon: 'blue',
        draggable: false,
        position: {
          lat: this.location.lat,
          lng: this.location.lng
        }
      }).then((marker) => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          // alert("CLICOU");
        });
      })
      
      //Adiciona marcadores dos banheiros
      this.banheiros.forEach((elem) => {
        this.map.addMarker({
          title: elem.name,
          icon: 'brown',
          draggable: false,
          position: {
            lat: elem.lat,
            lng: elem.lng
          }
        });
      });
    });
  }
    
  public goToLocation(): void {
    this.map.animateCamera({
      target: {
        lat: this.location.lat,
        lng: this.location.lng
      },
      zoom: 18,
      duration: 500
    });
  }
}
