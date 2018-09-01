import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@IonicPage()
@Component({
  selector: 'page-sobre-ti-detalle',
  templateUrl: 'sobre-ti-detalle.html',
})
export class SobreTiDetallePage {

  selectedItem: any;
  constructor(public dataProvider: ConferenceData,
    public navParams: NavParams)
  {
    this.selectedItem = navParams.get('item');
    
  }

}
