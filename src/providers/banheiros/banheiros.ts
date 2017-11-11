import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BanheirosProvider {

  constructor() {
    // console.log('Hello BanheirosProvider Provider');
  }
  
  // Banheiros
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
  ];

  public getBanheiros(): any[] {
  	return this.banheiros;
  }
}
