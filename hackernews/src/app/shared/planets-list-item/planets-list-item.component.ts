import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planets-list-item',
  templateUrl: './planets-list-item.component.html',
  styleUrls: ['./planets-list-item.component.css']
})
export class PlanetsListItemComponent implements OnInit {

  @Input('planet') planet: any

  constructor() { }

  ngOnInit() {
  }

}
