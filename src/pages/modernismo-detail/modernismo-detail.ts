import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ConferenceData } from '../../providers/conference-data';


@Component({
  selector: 'page-modernismo-detail',
  templateUrl: 'modernismo-detail.html',
})
export class ModernismoDetailPage {
  selectedItem: any;

  constructor(
    public dataProvider: ConferenceData,
    public navParams: NavParams
  ) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

}
