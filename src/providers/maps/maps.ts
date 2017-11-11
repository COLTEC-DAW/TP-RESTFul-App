import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { BanheirosProvider } from '../banheiros/banheiros';

@Injectable()
export class MapsProvider {

  constructor(
    private googleMaps: GoogleMaps,
    private banheirosProvider: BanheirosProvider
  ) {
  }
  
  map: GoogleMap;
  banheiros = this.banheirosProvider.getBanheiros();
  
  // Carrega mapa na tela
  public loadMap(location: any, div: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: location.lat,
            lng: location.lng
          },
          zoom: 17,
          tilt: 0
        }
      };
      this.map = this.googleMaps.create(div, mapOptions);
      
      //Quando mapa estiver pronto
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        this.map.setMyLocationEnabled(true);
        this.map.setIndoorEnabled(true);
        this.map.setCompassEnabled(true);
        this.map.setClickable(true);
        
        // Resolve a promessa
        resolve();
      });
    });
  }
  
  // Adiciona listener para criacao de banheiro
  public pegarClick(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.map.one(GoogleMapsEvent.MAP_CLICK).then((data) => {
        resolve(JSON.parse(data));
      });
    })
  }
        
  
  //Adiciona marcadores dos banheiros
  public showBanheirosOnMap(): void {
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
  }
  
  // Centraliza posicao do usuario
  public goToLocation(location: any): void {
    this.map.animateCamera({
      target: {
        lat: location.lat,
        lng: location.lng
      },
      zoom: 18,
      duration: 500
    });
  }
}
