import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { DoggoPage } from '../pages/doggo/doggo';
import { TabsPage } from '../pages/tabs/tabs';
import { GamesPage } from '../pages/games/games';
import { EmpleoPage } from '../pages/empleo/empleo';
import { VgPage } from '../pages/vg/vg';
import { JobPage } from '../pages/job/job';
import { SearchPage } from '../pages/search/search';
import { FavoritoProvider } from '../providers/favorito/favorito';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DoggoPage,
    TabsPage,
    GamesPage,
    EmpleoPage,
    VgPage,
    JobPage,
    SearchPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DoggoPage,
    TabsPage,
    GamesPage,
    EmpleoPage,
    VgPage,
    JobPage,
    SearchPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritoProvider
  ]
})
export class AppModule {}
