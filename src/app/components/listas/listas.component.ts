import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;
  @ViewChild( IonList ) lista: IonList;
  constructor(
    public toDoService: ToDoService,
    private router:Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  verLista(item: Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ item.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ item.id }`);
    }
  }

  borrarLista(item:Lista){
    this.toDoService.borrarLista(item);
  }

  async editarLista(item:Lista){
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs:[{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista',
        value: item.titulo
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          console.log('Canclear');
          this.lista.closeSlidingItems();
        }
      },{
        text: 'Editar',
        handler: (data) =>{
          if(data.titulo.length === 0){
            return;
          }
          item.titulo = data.titulo;
          this.toDoService.guardarStorage();
          this.lista.closeSlidingItems();
        }
      }]
    });

    await alert.present();
  }

}
