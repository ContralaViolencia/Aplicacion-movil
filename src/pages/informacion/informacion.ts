import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number'

import { InformacionDetallePage } from '../../pages/informacion-detalle/informacion-detalle';

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  mJson = [
    {
      id:1,
      titulo:'Fisica',
      ruta:'../../assets/img/violencia.jpg',
      subTitulo:'Violencia Fisica',
      contenido:'Causa daño visible o no en la mujer, hace uso de la fuerza física, o de algún objeto o arma.',
      manifestaciones:['Golpear con manos, codos o cabeza, abofetear.',
      'Lanzar objetos a la persona con el fin de herirla',
      'Tratar de ahorcar o asfixiar, etc.','Empujar o aventar.'
      ]
    },
    {
      id:2,
      titulo:'Psicologica',
      ruta:'../../assets/img/psicologica.jpg',
      subTitulo:'Violencia Psicologica',
      contenido:'Daña la estabilidad psicológica o emocional de la mujer.',
      manifestaciones:['Desprecio, indiferencia y falta de atención',
      'Negligencia y/o abandono.','Comparaciones destructivas y/o difamación.',
      'Enojo por incumplimiento de tareas consideradas propias de la mujer, etc.'
    ]
    },
    {
      id:3,
      titulo:'Patrimonial',
      ruta:'../../assets/img/patrimonio.jpg',
      subTitulo:'Violencia Patrimonial',
      contenido:'Acto que se ejerce contra el ingreso económica y/o pertenencias de la víctima.',
      manifestaciones:['Privación o destrucción de los bienes personales y materiales pertenecientes a la mujer.',
      'Negar el derecho de la mujer a trabajar para aportar a la economía familiar, etc.',
      'Que la pareja disponga de dinero o las pertenencias de la mujer sin su consentimiento u obligándola.',
      'Obligar a la mujer a trabajar para aportar a la economía familiar'

      ]
    },
    {
      id:4,
      titulo:'Sexual',
      ruta:'../../assets/img/sexual.jpg',
      subTitulo:'Violencia Sexual',
      contenido:'Incluye los actos que se ejercen directamente sobre el cuerpo y la sexualidad de la mujer.',
      manifestaciones:['Presión para tener relaciones sexuales no deseadas.',
      'Obligarla a realizar o recibir tocamientos sexuales no deseados.',
      'No usar ni permitir el uso de preservativos aun cuando ella lo pida.',
      'Durante el acto sexual obligar a la mujer a prácticas no pedidas ni deseadas.'

      ]
    },
    ];


  constructor(public navCtrl: NavController, public navParams: NavParams,public callNumber: CallNumber) {
  }

  itemTapped(item) {
    this.navCtrl.push(InformacionDetallePage, {
      item: item
    });
  }

call(){
  this.callNumber.callNumber("3163236451", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}

}
