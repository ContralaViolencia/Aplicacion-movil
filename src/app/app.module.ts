import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';



import { RelacionesPage } from '../pages/relaciones/relaciones';


import { RelacionesDetailPage } from '../pages/relacionesDetalle/relacionsDetalle';

import { TabsPage } from '../pages/tabs-page/tabs-page';



import { CaballerosidadPage } from '../pages/caballerosidad/caballerosidad';
import { ModernismoPage } from '../pages/modernismo/modernismo';
import { ModernismoDetailPage } from '../pages/modernismo-detail/modernismo-detail';
import { SobreTiPage } from '../pages/sobre-ti/sobre-ti';
import { SobreTiDetallePage } from '../pages/sobre-ti-detalle/sobre-ti-detalle';
import { InformacionPage } from '../pages/informacion/informacion';
import { EstadoRelacionPage } from '../pages/estado-relacion/estado-relacion';
import { CreateAccionPage } from '../pages/create-accion/create-accion';
import { InformacionDetallePage } from '../pages/informacion-detalle/informacion-detalle';
import { DerechosPage} from '../pages/derechos/derechos';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { CallNumber } from '@ionic-native/call-number'


@NgModule({
  declarations: [
    ConferenceApp,
    RelacionesPage,
    RelacionesDetailPage,
    TabsPage,
    CaballerosidadPage,
    ModernismoPage,
    ModernismoDetailPage,
    SobreTiPage,
    SobreTiDetallePage,
    InformacionPage,
    EstadoRelacionPage,
    CreateAccionPage,
    InformacionDetallePage,
    DerechosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: RelacionesDetailPage, name: 'RelacionesDetailPage', segment: 'RelacionesDetalle' },
        { component: RelacionesPage, name: 'RelacionesPage', segment: 'relaciones' },

        { component: CaballerosidadPage, name: 'CaballerosidadPage', segment: 'caballero' },
        { component: ModernismoPage, name: 'ModernismoPage', segment: 'modernismo' },
        { component: ModernismoDetailPage, name: 'ModernismoDetailPage', segment: 'modernismoDetail' },
        { component: SobreTiPage, name: 'SobreTiPage', segment: 'sobreTi' },
        { component: SobreTiDetallePage, name: 'SobreTiDetallePage', segment: 'sobreTiDetalles' },
        { component: InformacionPage, name: 'InformacionPage', segment: 'informacion' },
        { component: EstadoRelacionPage, name: 'EstadoRelacionPage', segment: 'EstadoRelacion' },
        { component: CreateAccionPage, name: 'CreateAccionPage', segment: 'CrearAccion' },
        { component: InformacionDetallePage, name: 'InformacionDetallePega', segment: 'Detalle' },
        { component: DerechosPage, name: 'DerechosPage', segment: 'Derechos' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    RelacionesPage,
    RelacionesDetailPage,
    TabsPage,
    CaballerosidadPage,
    ModernismoPage,
    ModernismoDetailPage,
    SobreTiPage,
    SobreTiDetallePage,
    InformacionPage,
    EstadoRelacionPage,
    CreateAccionPage,
    InformacionDetallePage,
    DerechosPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    CallNumber
  ]
})
export class AppModule { }
