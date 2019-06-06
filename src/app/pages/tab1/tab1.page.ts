import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: Lista[];
  constructor( 
    public toDoService:ToDoService,
    private router:Router
    ) {
    this.lista = toDoService.listas;
  }

  agregarLista(){
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}
