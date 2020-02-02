import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaConsultaComponent } from './pessoa-consulta/pessoa-consulta.component';
import { PluginsModule } from '../../plugins/plugins.module';
import { GeralModule } from '../../geral/geral.module';
import { PessoaService } from './pessoa.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PessoaComponent,
    PessoaCadastroComponent, 
    PessoaConsultaComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    PluginsModule,
    GeralModule,
    ReactiveFormsModule
  ],
  providers: [PessoaService]
})
export class PessoaModule { }
