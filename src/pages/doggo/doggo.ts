import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the DoggoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doggo',
  templateUrl: 'doggo.html',
})
export class DoggoPage {

  animal = {};
  imgs = [];
  obj = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav:  FavoritoProvider) {
    this.animal = this.navParams.get('animal');
    if(this.animal.ad.hasOwnProperty('images'))
    {
      this.imgs = this.animal.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoggoPage');
  }

   favoritos(animal)
   {
     this.fav.addFavoritos(this.animal);
   }
}
