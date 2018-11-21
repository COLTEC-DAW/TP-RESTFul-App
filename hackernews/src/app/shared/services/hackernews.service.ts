import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor(private http: Http) { }

  public search_people(query: string, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'people/?search=' + query).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }

  public search_planets(query: string, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'planets/?search=' + query).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }

  public search_starships(query: string, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'starships/?search=' + query).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }

  public get_person(id, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'people/' + id).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }
  public get_planet(id, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'planets/' + id).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }
  public get_starship(id, callback, callbackerror){
    this.http.get(environment.api_endpoint + 'starships/' + id).subscribe(
      success => {
        callback(success.json())
      },
      error => {
        callbackerror(error.json())
      }
    )
  }
}
