import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {NotasService} from '../../app/notas.service'; 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {
  private notasArray: any[];

  constructor(public navCtrl: NavController, public notas: NotasService,private alertCtrl: AlertController) {
  this.notas.obtenerNotas( (notas) =>{
  this.notasArray = notas;
    console.log(this.notasArray);
    console.log('Reciviendo datos...');

});

}
anyadirNota(){
      const prompt = this.alertCtrl.create({
      title: 'Nueva nota',
      message: "Introduce los datos del nuevo campeón que quieres añadir",
      inputs: [
        {
          name: 'tittle',
          placeholder: 'tittle'
        },
        {
          name: 'texto',
          placeholder: 'texto'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data.tittle);
            console.log(data.texto);
            this.notas.crearNotaConIdAutomatico(data);
          }
        }
      ]
    });
    prompt.present();
  
  }
eliminarNota(nota: any){
  this.notas.eliminarNota(nota);
}

editarNota(id : String){
   const prompt = this.alertCtrl.create({
      title: 'Nueva nota',
      message: "Introduce los datos del nuevo campeón que quieres añadir",
      inputs: [
        {
          name: 'tittle',
          placeholder: 'new title'
        },
        {
          name: 'texto',
          placeholder: 'new Text'
        },
       
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data.tittle);
            console.log(data.texto);
            this.notas.editarNota(data.tittle, data.texto, id);
          }
        }
      ]
    });
    prompt.present();
}
  
}
