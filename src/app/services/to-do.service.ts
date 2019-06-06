import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  listas: Lista[] = []; 

  constructor() { 
    console.log('Servicio Inicializado');
    const lista1 = new Lista('Terminar Curso de Udemy');
    const lista2 = new Lista('Terminar el examen de FullStack de Turing');
    this.listas.push(lista1, lista2);
  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
  }
}
