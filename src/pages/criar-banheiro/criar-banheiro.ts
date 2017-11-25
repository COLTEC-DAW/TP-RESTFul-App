import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MapsProvider } from '../../providers/maps/maps';
import { BanheirosProvider } from '../../providers/banheiros/banheiros';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-criar-banheiro',
  templateUrl: 'criar-banheiro.html'
})
export class CriarBanheiroPage {
	criarBanheiroForm: FormGroup;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private mapsProvider: MapsProvider,
    private banheirosProvider: BanheirosProvider
  ) {
  	this.criarBanheiroForm = formBuilder.group({
  		nome: ['', Validators.compose([Validators.maxLength(30), Validators.required])]
  	});
  }

  ionViewDidLoad() {
    let location = {
      lat: -19.8771371,
      lng: -43.9313414,
    };

    this.mapsProvider.loadMap(location, 'mapaCriarBanheiro').then(() => {
      let location = this.navParams.get('data');
      // Adicionar marcador
      this.mapsProvider.adicionarMarcador('mapaCriarBanheiro', location);
      this.mapsProvider.goToLocation('mapaCriarBanheiro', location);
    });
  }

  public testar() {
    // alert(this.criarBanheiroForm.controls.nome.value);
  	// this.navCtrl.pop();
    alert(this.navParams.get('data').lat);
  }
  
  public criarBanheiro(): void {
    let data = {
      lat: this.navParams.get('data').lat,
      lng: this.navParams.get('data').lng,
      name: this.criarBanheiroForm.controls.nome.value
    };
    
    this.banheirosProvider.addBanheiro(data);
    
    // Emite o alerta
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'Seu novo banheiro foi criado com sucesso',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.navCtrl.setRoot(HomePage);
    });
  }
  
  dismiss() {
    this.navCtrl.setRoot(HomePage);
  }
}
