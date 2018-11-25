import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HackernewsService } from '../../shared/services/hackernews.service'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planet:any
  constructor(private activated_route: ActivatedRoute, private instanciaservice: HackernewsService) { }

  ngOnInit() {

    this.activated_route.params.subscribe(params=>{
      this.instanciaservice.get_planet(params.id,
        sucess=>{
         this.planet = sucess

        },
       error=>{
         console.log(error)
       })
    })

  }

}
