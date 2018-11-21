import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HackernewsService } from '../../shared/services/hackernews.service'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public person : any

  constructor(private activated_route: ActivatedRoute, private instanciaservice: HackernewsService) { }

  ngOnInit() {
    this.activated_route.params.subscribe(params=>{
      this.instanciaservice.get_person(params.id,
        sucess=>{
         this.person = sucess

        },
       error=>{
         console.log(error)
       })
    })
  }

}
