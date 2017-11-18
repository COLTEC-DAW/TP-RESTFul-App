import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { BanheirosProvider } from '../banheiros/banheiros';
import { FirebaseListObservable } from "angularfire2";

@Injectable()
export class MapsProvider {

  constructor( private googleMaps: GoogleMaps, private banheirosProvider: BanheirosProvider ) {
  }
  
  banheiros = this.banheirosProvider.getBanheiros()
  map: GoogleMap[] = new Array<GoogleMap>();
  
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
      this.map[div] = new GoogleMap(div, mapOptions);
      
      //Quando mapa estiver pronto
      this.map[div].one(GoogleMapsEvent.MAP_READY).then(() => {
        this.map[div].setMyLocationEnabled(true);
        this.map[div].setIndoorEnabled(true);
        this.map[div].setCompassEnabled(true);
        this.map[div].setClickable(true);      
        
        // Resolve a promessa
        resolve();
      });
    });
  }
  
  // Adiciona listener para criacao de banheiro
  public pegarClick(div: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.map[div].one(GoogleMapsEvent.MAP_CLICK).then((data) => {
        resolve(JSON.parse(data));
      });
    })
  }
        
  
  //Adiciona marcadores dos banheiros
  public showBanheirosOnMap(div: string): void {
  	this.banheiros.forEach((elem) => {
      this.map[div].addMarker({
        title: elem.name,
        draggable: false,
        position: {
          lat: elem.lat,
          lng: elem.lng
        }
      });
    });
  }
  
  // Adiciona marcador ao mapa
  public adicionarMarcador(div: string, location: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.map[div].addMarker({
        animation: 'DROP',
        position: {
          lat: location.lat,
          lng: location.lng
        }
      }).then(() => {
        resolve();
      });
    });
  }
  
  // Centraliza posicao do usuario
  public goToLocation(div: string, location: any): void {
    this.map[div].animateCamera({
      target: {
        lat: location.lat,
        lng: location.lng
      },
      zoom: 18,
      duration: 500
    });
  }
}
