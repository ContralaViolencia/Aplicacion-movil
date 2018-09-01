import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-informacion-detalle',
  templateUrl: 'informacion-detalle.html',
})
export class InformacionDetallePage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  // ionViewDidLoad() {
    
  // }

}
