import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from 'src/app/services/data.service';

import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { TableComponent } from './table/table.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    ResumeComponent,
    TableComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DataService
  ],
  exports: [
    ExplorerComponent
  ]
})
export class ReporteDeVentasModule { }
