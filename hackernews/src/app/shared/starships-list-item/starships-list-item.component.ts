import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starships-list-item',
  templateUrl: './starships-list-item.component.html',
  styleUrls: ['./starships-list-item.component.css']
})
export class StarshipsListItemComponent implements OnInit {

  @Input('starship') starship: any

  constructor() { }

  ngOnInit() {
  }

}
