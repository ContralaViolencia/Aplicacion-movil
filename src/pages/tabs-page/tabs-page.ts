import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

// import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { EstadoRelacionPage } from '../estado-relacion/estado-relacion';

import { InformacionPage } from '../../pages/informacion/informacion';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = InformacionPage;
  tab2Root: any = EstadoRelacionPage;
  tab3Root: any = SchedulePage;
  tab4Root: any = MapPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
