import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the VgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vg',
  templateUrl: 'vg.html',
})
export class VgPage {

  juego= {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritoProvider) {
    this.juego = this.navParams.get('juego');
    if(this.juego.ad.hasOwnProperty('images'))
    {
      this.imgs = this.juego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VgPage');
  }

  favoritos(juego)
  {
    this.fav.addFavoritos(this.juego);
  }

}
