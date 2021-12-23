import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarTarefaComponent } from './components/criar-tarefa/criar-tarefa.component';
import { ListarTarefaComponent } from './components/listar-tarefa/listar-tarefa.component';

const routes: Routes = [
  {path: '', redirectTo: 'listar-tarefa', pathMatch: 'full'},
  //{path: '**', redirectTo: 'listar-tarefa', pathMatch: 'full'},
  {path: 'listar-tarefa', component: ListarTarefaComponent},
  {path: 'criar-tarefa', component: CriarTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
