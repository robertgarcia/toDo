import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: Lista[];
  constructor( 
    public toDoService:ToDoService,
    private router:Router,
    private alertCtrl: AlertController
    ) {
    this.lista = toDoService.listas;
  }

  async agregarLista(){
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs:[{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          console.log('Canclear');
          
        }
      },{
        text: 'Crear',
        handler: (data) =>{
          console.log(data);
          if(data.titulo.length === 0){
            return;
          }
          const listaId = this.toDoService.crearLista(data.titulo);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
        }
      }]
    });

    await alert.present();
  }
}
