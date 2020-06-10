import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu } from './components/menu/menu.component';
import { ListagemNoticias } from './components/listagem-noticias/listagem-noticias.component';


const routes: Routes = [
  {path: 'menu', component: Menu},
  {path: 'listagem-noticias/:linkRss', component: ListagemNoticias}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
