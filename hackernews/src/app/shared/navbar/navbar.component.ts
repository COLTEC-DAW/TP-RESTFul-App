import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public query: string = ''

  constructor(private router: Router) { }


  ngOnInit() {
  }

  random(){
    let random1 = Math.floor(Math.random() * 87) + 1
    this.router.navigate(["person", random1])
  }

}
