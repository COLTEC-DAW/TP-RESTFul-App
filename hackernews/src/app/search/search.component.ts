import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { HackernewsService } from '../shared/services/hackernews.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public people: any
  public planets: any
  public starships: any

  constructor(private activated_route: ActivatedRoute, private instanciaservice: HackernewsService) { }

  ngOnInit() {
    this.activated_route.params.subscribe(params => {
      let query = params.id
      this.instanciaservice.search_people(query,
        success => {
          console.log(success)
          this.people = success.results
        },
        error => {
          console.log(error)
        }
      )
      this.instanciaservice.search_planets(query,
        success => {
          console.log(success)
          this.planets = success.results
        },
        error => {
          console.log(error)
        }
      )
      this.instanciaservice.search_starships(query,
        success => {
          console.log(success)
          this.starships = success.results
        },
        error => {
          console.log(error)
        }
      )
    })
  }

}
