import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listmember',
  templateUrl: './listmember.component.html',
  styleUrls: ['./listmember.component.css']
})
export class ListmemberComponent implements OnInit {
  @Input('item') item: any

  constructor() { }

  ngOnInit() {
  }

}
