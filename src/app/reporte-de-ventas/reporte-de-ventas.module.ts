import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ExplorerComponent,
    ResumeComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExplorerComponent
  ]
})
export class ReporteDeVentasModule { }
