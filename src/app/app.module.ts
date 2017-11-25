import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { AboutPage } from '../pages/about/about'
import { ContactPage } from '../pages/contact/contact'
import { HomePage } from '../pages/home/home'
import { TabsPage } from '../pages/tabs/tabs'
import { CriarBanheiroPage } from '../pages/criar-banheiro/criar-banheiro'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { Geolocation } from '@ionic-native/geolocation'
import { GoogleMaps } from '@ionic-native/google-maps'
import { AdMobFree } from '@ionic-native/admob-free'
import { BanheirosProvider } from '../providers/banheiros/banheiros'
import { MapsProvider } from '../providers/maps/maps'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyAMpPTtksWD6aqg0kI2MOswL6q5MiKk1a8",
  authDomain: "ipoo-here.firebaseapp.com",
  databaseURL: "https://ipoo-here.firebaseio.com",
  projectId: "ipoo-here",
  storageBucket: "",
  messagingSenderId: "883981288431"
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CriarBanheiroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CriarBanheiroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BanheirosProvider,
    MapsProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
