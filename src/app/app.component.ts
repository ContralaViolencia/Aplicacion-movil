import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { RelacionesPage } from '../pages/relaciones/relaciones';
// import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs-page/tabs-page';
// import { SchedulePage } from '../pages/schedule/schedule';



import { CaballerosidadPage } from '../pages/caballerosidad/caballerosidad';
import { ModernismoPage } from '../pages/modernismo/modernismo';
import { SobreTiPage } from '../pages/sobre-ti/sobre-ti';
import { InformacionPage } from '../pages/informacion/informacion';
import { EstadoRelacionPage } from '../pages/estado-relacion/estado-relacion';
import { DerechosPage} from '../pages/derechos/derechos';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
  estilo?:any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  // valor = '#00CC00';
  activePage:any;
  informacionPages: PageInterface[] = [
    { title: 'Informacion', name: 'TabsPage', component: TabsPage, tabComponent: InformacionPage, index: 0, icon: 'information-circle',estilo:"#488aff" },
    // { title: 'Denuncia', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 1, icon: 'paper' },
    // { title: 'Boton de Panico', name: 'TabsPage', component: TabsPage, tabComponent: MapPage, index: 2, icon: 'warning',estilo:"#f0ad4e" },
    { title: 'Estado', name: 'TabsPage', component: TabsPage, tabComponent: EstadoRelacionPage, index: 1, icon: 'pulse',estilo:"palevioletred" }
    // { title: 'Estado', name: 'EstadoRelacionPage', component: EstadoRelacionPage, icon: 'pulse', estilo: 'palevioletred' }
  ];

   contenidoPages: PageInterface[] = [
    { title: 'Relaciones', name: 'RelacionesPage', component: RelacionesPage, icon: 'heart', estilo: 'red' },
    { title: 'Sobre Ti', name: 'SobreTiPage', component: SobreTiPage, icon: 'rose' , estilo: '#32db64'},
    { title: 'Modernidad', name: 'ModernismoPage', component: ModernismoPage, icon: 'transgender', estilo: 'purple' },
    { title: 'Caballerosidad', name: 'CaballerosidadPage', component: CaballerosidadPage, icon: 'person',estilo: "#57300a" }
  ];

  derechosPage:PageInterface[] = [
    { title: 'Derechos', name: 'DerechosPage', component: DerechosPage, icon: 'briefcase' }
  ]
  rootPage = InformacionPage;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {
    



    this.activePage = this.informacionPages[0];
  }

  openPage(page: PageInterface) {
    let params = {};
    this.activePage = page;

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Set the root of the nav with params if it's a tab index
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
  }


  checkActive(page: PageInterface){
    return page == this.activePage;
  }
}
