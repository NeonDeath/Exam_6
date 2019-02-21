import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DoggoPage } from '../doggo/doggo';
import { SearchPage } from '../search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animals = [];
  doggoPage = DoggoPage;
  buscarPage = SearchPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data));
        if(data.hasOwnProperty('counter_map'))
        {
          console.log(data.counter_map.all);
        }
        if(data.hasOwnProperty('list_ads'))
        {
          this.animals = data.list_ads;
        }
      }, 
        error => {
          console.log(JSON.stringify(error));
        })

  }

  verAnimal(animal)
  {
    this.navCtrl.push(this.doggoPage, {animal: animal});
  }

  buscar(any)
  {
    this.navCtrl.push(this.buscarPage, {animals: this.animals});
  }

  
}
