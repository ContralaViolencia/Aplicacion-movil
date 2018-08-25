import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaballerosidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caballerosidad',
  templateUrl: 'caballerosidad.html',
})
export class CaballerosidadPage {

  slide=[
  {
    id:1,
    Titulo:"Actua Como Tal",
    SubTitulo:"No es tan Dificil",
    ruta:"../../assets/img/correcto.jpg"
  },
  {
    id:2,
    Titulo:"Usa un Lenguaje Adecuado",
    SubTitulo:"No escupas tonterias",
    ruta:"../../assets/img/lenguaje.jpg"
  },
  {
    id:3,
    Titulo:"No todo es realmente correcto",
    SubTitulo:"Hay cosas que simplemente son de mal gusto",
    ruta:"../../assets/img/bien-mal.jpg"
  },
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
