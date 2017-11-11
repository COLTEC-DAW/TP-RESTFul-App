import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MapsProvider } from '../../providers/maps/maps';

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
    private mapsProvider: MapsProvider
  ) {
  	this.criarBanheiroForm = formBuilder.group({
  		nome: ['', Validators.compose([Validators.maxLength(30), Validators.required])]
  	});
  }

  ionViewDidLoad() {
    let location = {
      lat: this.navParams.get('lat'),
      lng: this.navParams.get('lng'),
    };
    
    // this.mapsProvider.loadMap(location, 'mapa');
  }

  public testar() {
    // alert(this.criarBanheiroForm.controls.nome.value);
  	// this.navCtrl.pop();
    alert(this.navParams.get('lat'));
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
