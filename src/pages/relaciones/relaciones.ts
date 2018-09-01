import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { AlertController } from 'ionic-angular';
import { RelacionesDetailPage } from '../relacionesDetalle/relacionsDetalle';



@Component({
  selector: 'page-user',
  templateUrl: 'relaciones.html'
})

export class RelacionesPage {

  rToxica = [
    {
      id:1,
      titulo:'Limita tu vida social',
      subTitulo:'No te deja salir con tus amigos/as',
      contenido:'Es necesario salir con amigos o familia y dejar claros los espacios de cada quien para no ahogarse en la relación.',
      ruta:'../../assets/img/marioneta.jpg'
    },
    {
      id:2,
      titulo:'Controla tus decisiones',
      subTitulo:'Te dice cómo debes vestirte ',
      contenido:'Tu cuerpo es sagrado y tienes derecho sobre él. ¿A tu pareja no le gusta cómo te vistes?. No tiene por qué decidir, tú te vistes y vives para ti, no para los demás.',
      ruta:'../../assets/img/decisiones.jpg'
    },
    {
      id:3,
      titulo:'No Hay Respeto',
      subTitulo:'Se insultan mutuamente',
      contenido:'Para tener estabilidad en una relación se debe empezar por quererse y respetarse a sí mismo, asi podras querer,respetar y confiar en los demas,esto es la base de una relacion, no el odio ni la violencia.',
      ruta:'../../assets/img/irrespeto.jpg'
    },
    {
      id:4,
      titulo:'Se siente Temor',
      subTitulo:'Sientes miedo de decir lo que piensas',
      contenido:'El amor es para ser felices, no para tener miedo. Tu pareja debe ser tu confidente, no tu enemigo o un monstruo al que temes hablar. No temas decir lo que piensas y respeta si la otra persona piensa diferente a ti. Al final, es mejor que piensen diferente en muchas cosas, esto dará riqueza y diversidad a la relación.',
      ruta:'../../assets/img/temor.jpg'
    },
    {
      id:5,
      titulo:'No hay confianza',
      subTitulo:'Tu pareja se enfada si no sabe de tu paradero',
      contenido:'Una relación debe darte tranquilidad y plenitud.Si tu pareja no confía en ti nunca habrá estabilidad.',
      ruta:'../../assets/img/desconfianza.jpg'
    },
    {
      id:6,
      titulo:'Advertencias Ajenas',
      subTitulo:'Tus familiares y amigos han intentado advertirte ',
      contenido:'Si es así, escúchalos. Es difícil ver la situación con objetividad desde adentro, pero nuestra familia o amigos pueden tener una idea más clara. Si te notan triste, callado o ausente, seguramente están viendo el problema que tú te niegas a ver.',
      ruta:'../../assets/img/consejo.jpg'
    }
    ];
    rValue: string = "Sanas";
  

  constructor(public navCtrl: NavController, 
    public userData: UserData,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    ) { 
       
    }
  
  itemTapped(item) {
    this.navCtrl.push(RelacionesDetailPage, {
      item: item
    });
  }


}
