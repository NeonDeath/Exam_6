import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoggoPage } from '../doggo/doggo';
import { VgPage } from '../vg/vg';
import { JobPage } from '../job/job';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  items = [];
  doggoPage = DoggoPage;
  gamePage = VgPage;
  jobPage = JobPage;
  vgpage = VgPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritoProvider) {
      this.items = this.fav.getFavoritos();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  
verFav(animal)
{
    this.navCtrl.push(this.doggoPage, {animal: animal});
}


}
