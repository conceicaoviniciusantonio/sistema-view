import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input() title: string = '';

  @Input() message: string = '';

  @Input() cancelButtonText: string = 'Cancelar';

  @Input() okButtonText: string = 'Ok';

  @Input() showCancelButton: boolean = true;

  @Input() showOkButton: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<MensagemComponent>
  ) {

  }

  ngOnInit() {
  }

  onOkButtonClick() {
    this.dialogRef.close('ok');
  }

  onCancelButtonClick() {
    this.dialogRef.close('cancel');
  }

}
