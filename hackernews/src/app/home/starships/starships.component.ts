import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HackernewsService } from '../../shared/services/hackernews.service'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public starship:any
  constructor(private activated_route: ActivatedRoute, private instanciaservice: HackernewsService) { }

  ngOnInit() {

    this.activated_route.params.subscribe(params=>{
      this.instanciaservice.get_starship(params.id,
        sucess=>{
         this.starship = sucess
         console.log(sucess)

        },
       error=>{
         console.log(error)
       })
    })

  }

}
