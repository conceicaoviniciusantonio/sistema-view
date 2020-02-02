import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaComponent } from './pessoa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaConsultaComponent } from './pessoa-consulta/pessoa-consulta.component';



const routes: Routes = [
  {
    path: 'cadastros/pessoa',
    component: PessoaComponent,
    children: [
      { path: '', component: PessoaConsultaComponent },
      { path: 'new', component: PessoaCadastroComponent },
      { path: 'edit/:id', component: PessoaCadastroComponent },
      { path: 'view/:id', component: PessoaCadastroComponent },
      { path: 'delete/:id', component: PessoaCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
