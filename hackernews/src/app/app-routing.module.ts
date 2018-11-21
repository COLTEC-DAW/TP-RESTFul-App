import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PeopleComponent } from './home/people/people.component';
import { PlanetsComponent } from './home/planets/planets.component';
import { StarshipsComponent } from './home/starships/starships.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'search/:id', component: SearchComponent },
  { path: 'person/:id', component: PeopleComponent },
  { path: 'planet/:id', component: PlanetsComponent },
  { path: 'starship/:id', component: StarshipsComponent },
  { path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
