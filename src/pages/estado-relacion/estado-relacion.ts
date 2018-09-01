import { Component, DoCheck } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CreateAccionPage } from '../../pages/create-accion/create-accion';

@IonicPage()
@Component({
  selector: 'page-estado-relacion',
  templateUrl: 'estado-relacion.html',
})
export class EstadoRelacionPage implements DoCheck {

  nociva = false;
  rValue: string = "Buenas";

  accionesBuenas:string[] = [];

  accionesMalas:string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  if( localStorage.getItem('data') ){
    this.accionesBuenas = JSON.parse(localStorage.getItem('data'))
  }
  if( localStorage.getItem('data2') ){
    this.accionesMalas = JSON.parse(localStorage.getItem('data2'))
  }
  }


  ngDoCheck(){
    if( localStorage.getItem('data') ){
      this.accionesBuenas = JSON.parse(localStorage.getItem('data'))
    }
    if( localStorage.getItem('data2') ){
      this.accionesMalas = JSON.parse(localStorage.getItem('data2'))
    }

    if( (this.accionesBuenas.length > this.accionesMalas.length) ){
      this.nociva = false;
    }else{
      this.nociva = true;
    }
  }

  eliminarB(a,i) {
    const confirm = this.alertCtrl.create({
      title: 'Borrar Esta Accion',
      message: '¿Desea borrar la siguiente accion: ' + a + '?',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            this.accionesBuenas.splice(i, 1),
            localStorage.setItem('data',JSON.stringify(this.accionesBuenas));
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
  
  eliminarM(a,i) {
    const confirm = this.alertCtrl.create({
      title: 'Borrar Esta Accion',
      message: '¿Desea borrar la siguiente accion: ' + a + '?',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            this.accionesMalas.splice(i, 1);
            localStorage.setItem('data2',JSON.stringify(this.accionesMalas));
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();
  }

  editarB(a,i) {
    const prompt = this.alertCtrl.create({
      title: 'Editar Accion',
      message: "",
      inputs: [
        {
          name: 'Accion',
          placeholder: 'Accion',
          value: a
        },
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: a => {
            this.accionesBuenas[i] = a.Accion; 
            localStorage.setItem('data',JSON.stringify(this.accionesBuenas));
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }
      ]
    });
    prompt.present();
  }


  editarM(a,i) {
    const prompt = this.alertCtrl.create({
      title: 'Editar Accion',
      message: "",
      inputs: [
        {
          name: 'Accion',
          placeholder: 'Accion',
          value: a
        },
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: () => {
            this.accionesMalas[i] = a.Accion;  
            localStorage.setItem('data2',JSON.stringify(this.accionesMalas));
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            
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
