import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobPage } from '../job/job';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {

  empleos = [];
  jobPage = JobPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) 
  {
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
    .subscribe(data => {
      //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('counter_map'))
      {
        console.log(data.counter_map.all);
      }
      if(data.hasOwnProperty('list_ads'))
      {
        this.empleos = data.list_ads;
      }
    }, 
      error => {
        console.log(JSON.stringify(error));
      })    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleoPage');
  }

  verEmpleo(empleo)
  {
    this.navCtrl.push(this.jobPage, {empleo: empleo});
  }

}
