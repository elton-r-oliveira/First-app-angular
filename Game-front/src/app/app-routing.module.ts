import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './components/jogo/jogo.component';

const routes: Routes = [{
  path: 'jogos', component: JogoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
