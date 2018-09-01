import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-create-accion',
  templateUrl: 'create-accion.html',
})
export class CreateAccionPage {


  accionesBuenas = []

  accionesMalas = []



  accion: string = "";
  tipoAccion: string = "";

  selectOptions = {
    cancelText: 'Cancelar'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.getItem('data')) {
      this.accionesBuenas = JSON.parse(localStorage.getItem('data'))
    }
    if (localStorage.getItem('data2')) {
      this.accionesMalas = JSON.parse(localStorage.getItem('data2'))
    }
  }

  volver() {
    this.navCtrl.pop();
  }

  guardar() {
    if (this.tipoAccion == "Buena") {
      this.accionesBuenas.push(this.accion);
      localStorage.setItem('data', JSON.stringify(this.accionesBuenas));
      
    } else {
      this.accionesMalas.push(this.accion);
      localStorage.setItem('data2', JSON.stringify(this.accionesMalas));
    }
    this.navCtrl.pop();

  }



}
