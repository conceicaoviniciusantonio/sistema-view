import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { MensagemService } from 'src/app/modules/geral/mensagem/mensagem.service';
import { NotificacaoService } from 'src/app/modules/geral/notificacao/notificacao.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  formulario: FormGroup;

  acao: string = '';
  inscricoes: Subscription[] = [];

  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };

  linear = true;
  primeiroGrupo: FormGroup;
  segundoGrupo: FormGroup;
  terceiroGrupo: FormGroup;
  isLinear: boolean;
  idCadastro: number;


  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private msg: MensagemService,
    private pessoaService: PessoaService,
    private ntf: NotificacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.acao = this.activeRoute.snapshot.url[0].path;

    this.formulario = new FormGroup({
      id: new FormControl(),
      nome: new FormControl({ value: '', disabled: !this.isEnabled() }, Validators.required),
      dataNascimento: new FormControl({ value: '', disabled: !this.isEnabled() }, Validators.required),
      rua: new FormControl({ value: '', disabled: !this.isEnabled() }),
      cep: new FormControl({ value: '', disabled: !this.isEnabled() }),
      numero: new FormControl({ value: '', disabled: !this.isEnabled() }),
      cidade: new FormControl({ value: '', disabled: !this.isEnabled() }),
      estado: new FormControl({ value: '', disabled: !this.isEnabled() }),
      telefoneFixo: new FormControl({ value: '', disabled: !this.isEnabled() }),
      telefoneCelular: new FormControl({ value: '', disabled: !this.isEnabled() })
    });

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.pessoaService.get(dados['id']).subscribe((u) => this.atualizaCampos(u));
      }
    });

    this.inscricoes.push(s1);

    this.isLinear = true;

  }


  voltar() {
    this.router.navigate(['cadastros', 'pessoa']);
  }

  finalizar() {
    this.salvar();
    this.ntf.openSnackBar(this.acao);
    this.voltar();
  }

  salvar() {

    if (this.acao == 'new') {
      if (this.idCadastro == null) {
        let s = this.pessoaService.insert(this.formulario.value).subscribe((r) => {
          this.idCadastro = r.id;
        }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
        this.inscricoes.push(s);
      } else {
        this.formulario.value.id = this.idCadastro;
        let s = this.pessoaService.update(this.formulario.value).subscribe((r) => {
        }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
        this.inscricoes.push(s);
      }
    } else if (this.acao == 'edit') {
      let s = this.pessoaService.update(this.formulario.value).subscribe((r) => {
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    }
  }

  excluir() {
    let s = this.msg.confirmarExcluir().subscribe((result) => result ? this.confirmarExcluir() : null);
    this.inscricoes.push(s);
  }

  confirmarExcluir() {
    let s = this.pessoaService.delete(this.formulario.get('id').value).subscribe((r) => {
      this.voltar();
    }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));

    this.inscricoes.push(s);
    this.ntf.openSnackBar(this.acao);
    this.voltar();
  }

  isValidForm() {
    return this.formulario.status == "VALID"
  }

  atualizaCampos(dados) {
    this.formulario.patchValue({
      id: dados.id,
      nome: dados.nome,
      dataNascimento: dados.dataNascimento,
      rua: dados.rua,
      cidade: dados.cidade,
      estado: dados.estado,
      cep: dados.cep,
      numero: dados.numero,
      telefoneFixo: dados.telefoneFixo,
      telefoneCelular: dados.telefoneCelular,
    });
  }

  getErrorMessage() {
    return 'Este campo é obrigatório!'
  }
  isEnabled(): boolean {
    return this.acao == 'edit' || this.acao == 'new';
  }

  isSalvarEnabled(): boolean {
    return this.isEnabled();
  }

  isExcluirEnabled(): boolean {
    return this.acao == 'delete';
  }

  ngOnDestroy() {
    this.inscricoes.forEach((s) => s.unsubscribe());
  }
}
