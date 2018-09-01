import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


import { EstadoRelacionPage } from '../estado-relacion/estado-relacion';

import { InformacionPage } from '../../pages/informacion/informacion';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = InformacionPage;
  tab2Root: any = EstadoRelacionPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
