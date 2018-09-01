import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SobreTiDetallePage } from '../sobre-ti-detalle/sobre-ti-detalle';

@IonicPage()
@Component({
  selector: 'page-sobre-ti',
  templateUrl: 'sobre-ti.html',
})
export class SobreTiPage {

  wJson = [
    {
      id:1,
      titulo:'Look',
      ruta:'../../assets/img/mujer.jpg',
      subTitulo:'Para ti',
      enunciado:'Como "DEBE" Lucir Una Mujer',
      contenido:'Venimos al mundo como un lienzo en blanco, donde poco a poco se va dibujando una identidad personal. En efecto es inegable que hay diferenias bilogicas entre hombres y mujeres, y estas diferencias se hacen patentes en algunos aspectos de la vida, no en toda la vida.Por ello asignar moldes a las personas,tales como que los hombres tienen que ser fuertes y las mujeres bellas es algo erroneo.Es necesario dejar de lado estas ideas estandardizadoras,como hombre usted mismo es capaz de hacer su comida y no esperar a que "una esclava lo haga" no por ser hombre se debe ser fuerte y una maquina en busca de sexo, y una mujer no tiene que casarse o "ser femenina".Hay muchas mujeres que no gustan de las cosas delicadas y hay muchos hombres que no gustan de las cosas agresivas,fuertes e imponentes.Nuestro sexo no determina quien somos, lo hacemos nosotros mismos, cuando escogemos nuestra manera de vivir y ser. Si dos personas, hombre y mujer perdieran su organo reproductor, vease pene o vagina, "¿como deberian comportarse?",no podriamos ver diferencia entre los dos ¿verdad?.',
      icono:'shirt',
      color:'blue'
    },
    {
      id:2,
      titulo:'Pareja',
      ruta:'../../assets/img/pareja.jpg',
      subTitulo:'¿Algo Obligatorio?',
      enunciado:'Pareja Ideal',
      contenido:'¿Es realmente tan grave que un hombre realice las tareas de la casa y una mujer salga trabajar?. A travez de los años se nos ha impuesto roles que debemos cumplir unica y llanamente por el hecho de nacer mujer o hombre.Es cierto todos cumplimos un rol en la sociedad, pero este debe ser uno en el que nos sintamos comodos,si es usted un hombre que se encarga de mantener el hogar(lo que en realidad, es tambien un trabajo que demanda horas de labores tediosas) ¿hay algo por lo que deba sentirse avergonzado?.Si es usted una mujer y no quiere realizar labores domesticas, quiere ser independiente y aportar economicamente al hogar aunque su pareja no lo haga, ¿hay algun problema con esto?, las mujeres no estan hechas unicamente para dar a luz a los hijos y criarlos encerradas en una casa, los hombres no estan unicamente hechos para "salir a trabajar".Estamos en una epoca en la que no hay limitante alguna para lo que queramos hacer, seguir viendo como inferior a una persona por su sexo es irracional,lo que debemos hacer es forjar una comunidad en la cual todos aportemos y recibamos sin discriminacion alguna.',
      icono:'contacts',
      color:'purple'
    },
    {
      id:3,
      titulo:'Conductas',
      ruta:'../../assets/img/libre.png',
      subTitulo:'¿Ser Femenina?',
      enunciado:'Conductas o Comportamiento como Mujer',
      contenido:'Hay que entender que el mundo, en especial durante los ultimos años, ha cambiado de una manera radical y lo seguira haciendo, muchas cosas que se veian mal en ataño, ahora son aceptadas.La homofobia,el racismo, la xenofobia y de mas excusas antimoralistas se han ido dejando de lado. Cada dia hay mas y mas teconologia que busca facilitarnos el diario vivir. Los gustos e intereses florecen por todas partes y de ellos derivan miles de oficios y carreras profesionales que hace años eran impensables.El genero es realmente irrelevante a la hora de ser humanos,tenemos las mismas capacidades y nos podemos desempeñar en las mismas funciones.Atras tiene que quedar la epoca en la que se reprimia a la mujer, por ser mujer.Es verdad,el mundo no es igualitario con ellas,y aun falta mucho para que lo sea,pero en vez de retroceder y volver a las epocas pasadas debemos contribuir para que mas cambios sigan ocurriendo,cambios que buscan seguir con este avance,con el progreso, con la igualdad, con una mejor vida para usted y para todos.',
      icono:'sunny',
      color:'#f0ad4e'
    },
    {
      id:4,
      titulo:'Mujer',
      ruta:'../../assets/img/Adelante.jpg',
      subTitulo:'Mas que eso',
      enunciado:'Mas que una Mujer',
      contenido:'No estamos aqui para atacar tus creencias o lo que ellas dictan, sabemos que la religion y la fe es algo muy importante en la vida de las personas, por ello hablaremos bajo esta perspectiva.Dios ha creado un mundo provisto de todo lo necesario para que podamos convivir sin estar "apretados" y nos ha puesto a hombres y mujeres en el mismo lugar para hacernos compañia y ayudarnos, nos ha provisto de las mismas extremidades y unicamente ha remarcado una diferencia en nosotros, nuestros organos reproductores. Siendo Dios un ser provisto de muchas virtudes, ¿no es logico pensar que este quiere lo mismo tanto para el hombre como para la mujer ya que nos ha situado en un mismo mundo?.La biblia promueve muchos tipos de actitudes,machistas,misogicas y homofobicas, que no van a la par con el concepto de Dios bondadoso y justo en el que se cree como creyente ¿no?.La religion promueve los valores y el bienestar basados en nuestro concepto de Dios y el legado que este nos ha dejado,es menester entonces que consideres que para llevar esta vida de moral bienaventurada es necesario, dejar atras los conceptos que hacian ver a la mujer como un inferior y pienses en el hecho de que Dios nos ve a todos por igual, sea hombre o mujer el juzga y corresponde a las acciones de cada persona sin tener en cuenta su sexo.',
      icono:'woman',
      color:'pink'
    },
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  itemTapped(item) {
    this.navCtrl.push(SobreTiDetallePage, {
      item: item
    });
  }

}
