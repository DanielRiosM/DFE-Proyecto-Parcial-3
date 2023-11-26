import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ExplorerComponent } from './reporte-de-ventas/explorer/explorer.component';
import { ExplorerCatalogoComponent } from './catalogo/explorer-catalogo/explorer-catalogo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'explorer', component: ExplorerComponent},
  {path: 'explorer-catalogo', component: ExplorerCatalogoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent} // agregar el componente de NotFound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
