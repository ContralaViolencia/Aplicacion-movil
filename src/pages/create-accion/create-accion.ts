import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-create-accion',
  templateUrl: 'create-accion.html',
})
export class CreateAccionPage {

  selectOptions = {
   
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectOptions = {
      cancelText:'Cancelar'
    };
  }



}
