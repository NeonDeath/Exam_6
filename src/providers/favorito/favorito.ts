import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritoProvider {

  favoritos = [];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritoProvider Provider');
  }

  remove(animal)
  {
   let index = this.favoritos.findIndex(item => {
    return item.ad.subject == animal.ad.subject &&
    item.ad.user.account.name == animal.ad.user.account.name;
   }); 

  if ( index > -1){
    this.favoritos.splice(index, 1);
    const toast = this.toastCtrl.create({
      message: 'Publicación liminada de favoritos ',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    }
  } 

  existe(animal)
  {
    this.favoritos.some(item => {
      return item.ad.subject == animal.ad.subject &&
      item.ad.user.account.name == animal.ad.user.account.name;
    })
  }

addFavoritos(animal)
{
  this.favoritos.push( animal);
  const toast = this.toastCtrl.create({
    message: 'Publicación agregada a favoritos ',
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

getFavoritos()
{
  return this.favoritos;
}

}
