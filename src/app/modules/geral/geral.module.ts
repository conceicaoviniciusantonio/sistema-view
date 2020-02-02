import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PluginsModule } from '../plugins/plugins.module';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemService } from './mensagem/mensagem.service';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { NotificacaoService } from './notificacao/notificacao.service';



@NgModule({
  imports: [
    CommonModule,
    PluginsModule,
    RouterModule
  ],
  entryComponents: [MensagemComponent, NotificacaoComponent],
  declarations: [HeaderComponent, MensagemComponent, NotificacaoComponent],
  providers: [MensagemService, NotificacaoService],
  exports: [HeaderComponent, MensagemComponent, NotificacaoComponent]
})
export class GeralModule { }
