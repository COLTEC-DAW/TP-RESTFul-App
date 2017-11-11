import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private admobFree: AdMobFree, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      // this.showAdMobBannerAds();
      // this.showAdMobInterstitialAds();
      // this.showRewardVideoAds();
    });
  }
  
  // Anuncio Banner
  public showAdMobBannerAds(): void {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-8167880969598870/1849796272",
      isTesting: false,
      autoShow: true
    };
    
    this.admobFree.banner.config(bannerConfig);
    
    this.admobFree.banner.prepare().then(() => {
      // alert("TA PRONTO");
    }).catch((error) => {
      alert(error);
    });
  }
  
  // Anuncio Interstitial
  public showAdMobInterstitialAds(): void {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: "ca-app-pub-8167880969598870/4003464129",
      isTesting: false,
      autoShow: true
    };
    
    this.admobFree.interstitial.config(interstitialConfig);
    
    this.admobFree.interstitial.prepare().then(() => {
      // alert("TA PRONTO");
    }).catch((error) => {
      alert(error);
    });
  }
  
  // Anuncio Video
  public showRewardVideoAds(): void {
    const videoConfig: AdMobFreeRewardVideoConfig = {
      id: "ca-app-pub-8167880969598870/5595747398",
      isTesting: false,
      autoShow: true
    }
    
    this.admobFree.rewardVideo.config(videoConfig);
    
    this.admobFree.rewardVideo.prepare().then(() => {
      // alert("TA PRONTO");
    }).catch((error) => {
      alert(error);
    })
  }
}
