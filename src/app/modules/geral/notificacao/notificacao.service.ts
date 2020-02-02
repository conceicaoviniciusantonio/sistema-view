import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificacaoComponent } from './notificacao.component';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(acao: string) {
    this.snackBar.openFromComponent(NotificacaoComponent, {
      duration: 5000
    });
  }
}
