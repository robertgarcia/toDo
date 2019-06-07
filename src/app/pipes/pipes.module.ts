import { NgModule } from '@angular/core';
import { FiltroListasPipe } from './filtro-listas.pipe';

@NgModule({
  declarations: [FiltroListasPipe],
  exports: [FiltroListasPipe]
})
export class PipesModule { }
