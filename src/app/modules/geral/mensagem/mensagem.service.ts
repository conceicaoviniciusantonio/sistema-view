import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  dialogRef: MatDialogRef<MensagemComponent>;

  constructor(private dialog: MatDialog) { }

  confirmar(mensagem: string): Observable<string> {
    let o = new Observable<string>((observer) => {
      this.dialogRef = this.dialog.open(MensagemComponent, {
        disableClose: false,
        minWidth: '500px',
      });

      this.dialogRef.componentInstance.title = 'Confirmação';
      this.dialogRef.componentInstance.message = mensagem; //'Confirma a <strong>EXCLUSÃO</strong> deste registro?';

      this.dialogRef.afterClosed().subscribe((result) => {
        observer.next(result);
        observer.complete();
      });
    });

    return o;
  }

  confirmarExcluir(): Observable<boolean> {
    let o = new Observable<boolean>((observer) => {
      this.dialogRef = this.dialog.open(MensagemComponent, {
        disableClose: false,
        minWidth: '500px',
      });

      this.dialogRef.componentInstance.title = 'Confirmação';
      this.dialogRef.componentInstance.message = 'Confirma a <strong>EXCLUSÃO</strong> deste registro?';

      this.dialogRef.afterClosed().subscribe((result) => {
        observer.next(result == 'ok');
        observer.complete();
      });
    });

    return o;
  }

  msgErroCadastro(error: any) {
    let o = new Observable<string>((observer) => {
      this.dialogRef = this.dialog.open(MensagemComponent, {
        disableClose: false,
        minWidth: '500px',
      });

      this.dialogRef.componentInstance.title = 'Erro';
      this.dialogRef.componentInstance.message = this.buildErrorMessage(error.error);
      this.dialogRef.componentInstance.showCancelButton = false;

      this.dialogRef.afterClosed().subscribe((result) => {
        observer.next(result);
        observer.complete();
      });
    });

    return o;
  }

  buildErrorMessage(response: any): string {

    let msg = response.message;

    if (response.errors && Object.keys(response.errors).length > 0) {

      let keys = Object.keys(response.errors);
      msg += '<div class="text-left">';
      msg += '<ul>';

      for (const attributeError of keys) {
        for (const message of response.errors[attributeError]) {
          msg += '<li>';
          msg += message;
          msg += '</li>';
        }
      }
      msg += '</ul>';
      msg += '</div>';
    }

    return msg;
  }
}
