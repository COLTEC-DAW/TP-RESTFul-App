import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListmemberComponent } from './shared/listmember/listmember.component';
import { PeopleListItemComponent } from './shared/people-list-item/people-list-item.component';
import { PlanetsListItemComponent } from './shared/planets-list-item/planets-list-item.component';
import { StarshipsListItemComponent } from './shared/starships-list-item/starships-list-item.component';
import { PeopleComponent } from './home/people/people.component';
import { PlanetsComponent } from './home/planets/planets.component';
import { StarshipsComponent } from './home/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    ListmemberComponent,
    PeopleListItemComponent,
    PlanetsListItemComponent,
    StarshipsListItemComponent,
    PeopleComponent,
    PlanetsComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
