import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VgPage } from '../vg/vg';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  juegos = [];
  vgPage = VgPage;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
  .subscribe(data => {
    //console.log(JSON.stringify(data));
     if(data.hasOwnProperty('counter_map'))
     {
       console.log(data.counter_map.all);
     }
     if(data.hasOwnProperty('list_ads'))
     {
       this.juegos = data.list_ads;
     }
  }, 
    error => {
      console.log(JSON.stringify(error));
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamesPage');
  }

  verJuego(juego)
  {
    this.navCtrl.push(this.vgPage, {juego: juego});
  }

}
