import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReporteDeVentasModule } from './reporte-de-ventas/reporte-de-ventas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    DashboardModule,
    ReporteDeVentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
