import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReporteDeVentasModule } from './reporte-de-ventas/reporte-de-ventas.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    DashboardModule,
    ReporteDeVentasModule,
    CatalogoModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
