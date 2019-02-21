import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job',
  templateUrl: 'job.html',
})
export class JobPage {

  empleo = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritoProvider) {
    this.empleo = this.navParams.get('empleo');
    if(this.empleo.ad.hasOwnProperty('images'))
    {
      this.imgs = this.empleo.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobPage');
  }

  favoritos()
  {
    this.fav.addFavoritos(this.empleo);
  }

}
