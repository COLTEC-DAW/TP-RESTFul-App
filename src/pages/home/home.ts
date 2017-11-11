import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from '../../providers/maps/maps';
import { CriarBanheiroPage } from '../criar-banheiro/criar-banheiro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //CONSTRUTOR
  constructor(
    public navCtrl: NavController,
    private geolocation: Geolocation,
    private mapsProvider: MapsProvider,
    private modalCtrl: ModalController
  ) {
  }
  
  //PROPRIEDADES  
  private location = {
    lat: null,
    lng: null
  };
    
  //CARREGOU
  ionViewDidLoad() {
    this.getGeolocation();
  }

  //FUNCOES
  public getGeolocation(): void {
    this.geolocation.getCurrentPosition().then((answer) => {
      this.location.lat = answer.coords.latitude;
      this.location.lng = answer.coords.longitude;
    }).catch((error) => {
      this.location.lat = -19.8771371;
      this.location.lng = -43.9313414;
    }).then(() => {
      //Desenha o mapa + banheiros
      this.mapsProvider.loadMap(this.location, 'map').then(() => {
        this.mapsProvider.showBanheirosOnMap();
      });
    });
  }
  
  public goToLocation(): void {
    this.mapsProvider.goToLocation(this.location);
  }
  
  public goToCriarBanheiro(): void {
    this.mapsProvider.pegarClick().then((data) => {
      let modal = this.modalCtrl.create(CriarBanheiroPage, {lat: data.lat, lng: data.lng});
      modal.present();
    });
  }
}
