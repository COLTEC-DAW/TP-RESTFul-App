import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BanheirosProvider {
  banheirosRef: AngularFireList<any>
  banheiros: Observable<any[]>

  constructor ( db: AngularFireDatabase ) {
    this.banheirosRef = db.list('bathrooms')
    // Use snapshotChanges().map() to store the key
    this.banheiros = this.banheirosRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    })
    alert(this.banheiros)
  } 

  getBanheiros () {
    return this.banheiros
  }

  addBanheiro (data) {
    this.banheirosRef.push(data)
  }

  // Banheiros
  /*private banheirosNovos = [
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
  ];*/
}
