import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;
  constructor(
    public toDoService: ToDoService,
    private router:Router,
  ) { }

  ngOnInit() {}

  verLista(item: Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ item.id }`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ item.id }`);
    }
  }

}
