import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ToastController } from 'ionic-angular';
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
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
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
        this.mapsProvider.showBanheirosOnMap('map');
      });
    });
  }
  
  public goToCriarBanheiro(): void {
    let toast = this.toastCtrl.create({
      message: 'Selecione no mapa onde deseja adicionar um banheiro',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
    
    this.mapsProvider.pegarClick('map').then((data) => {
      this.mapsProvider.adicionarMarcador('map', data).then(() => {
        // Navega para pagina de Criar Banheiro
        this.navCtrl.setRoot(CriarBanheiroPage, {data: data});
      });
    });
  }
}
