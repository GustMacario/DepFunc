import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { DepartamentosComponent } from './pages/departamentos/departamentos.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';

const routes: Routes = [
  {
    path: '',
    component: DepartamentosComponent
  },
  {
    path: 'departamento-detalhe/:id',
    component: DepartamentoComponent
  },
  {
    path: 'departamento-cadastro',
    component: DepartamentoComponent
  },
  {
    path: 'departamento/:departamentoId/funcionarios',
    component: FuncionariosComponent
  },
  {
    path: 'departamento/:departamentoId/funcionario/:funcionarioId',
    component: FuncionarioComponent
  },
  {
    path: 'departamento/:departamentoId/funcionario',
    component: FuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
