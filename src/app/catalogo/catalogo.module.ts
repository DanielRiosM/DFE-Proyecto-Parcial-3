import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFormComponent } from './catalogo-form/catalogo-form.component';
import { ExplorerCatalogoComponent } from './explorer-catalogo/explorer-catalogo.component';
import { DataService } from 'src/app/services/data.service';



@NgModule({
  declarations: [
    CatalogoFormComponent,
    ExplorerCatalogoComponent
  ],
  providers:[
    DataService
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogoModule { }
