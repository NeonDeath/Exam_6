import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoggoPage } from '../doggo/doggo';
import { animateChild } from '@angular/core/src/animation/dsl';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  animals = [];
  items = [];
  doggoPage = DoggoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animals = this.navParams.get('animals');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev)
  {
    console.log(ev.target.value);

    this.items = this.animals.filter(animal => {
      return animal.ad.subject.toLowerCase().includes( ev.target.value.toLowerCase())
    });
  }

  verAnimal(animal)
  {
    this.navCtrl.push(this.doggoPage, {animal: animal});
  }

}
