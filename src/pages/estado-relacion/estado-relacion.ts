import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateAccionPage } from '../../pages/create-accion/create-accion';

@IonicPage()
@Component({
  selector: 'page-estado-relacion',
  templateUrl: 'estado-relacion.html',
})
export class EstadoRelacionPage {

  nociva = true;
  rValue: string = "Buenas";

  accionesBuenas = [
    {
      id: 1,
      nombre: 'Confianza'
    },
    {
      id: 2,
      nombre: 'Honestidad'
    },
    {
      id: 3,
      nombre: 'Buen Trato'
    },
  ]

  accionesMalas = [
    {
      id: 1,
      nombre: 'Mentiras'
    },
    {
      id: 2,
      nombre: 'Celos Obsesivos'
    },
    {
      id: 3,
      nombre: 'Reclamo Innecesario'
    },
    {
      id: 4,
      nombre: 'Es Puto'
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }




  eliminar(a) {
    const confirm = this.alertCtrl.create({
      title: 'Borrar Esta Accion',
      message: '¿Desea borrar la siguiente accion: ' + a + '?',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            console.log('Item Borrado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    confirm.present();
  }

  editar(a) {
    const prompt = this.alertCtrl.create({
      title: 'Editar Accion',
      message: "",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value:a
        },
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: () => {
            console.log('Editado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    prompt.present();
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CreateAccionPage);
  }

}
