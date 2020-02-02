import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { MensagemService } from 'src/app/modules/geral/mensagem/mensagem.service';
import { NotificacaoService } from 'src/app/modules/geral/notificacao/notificacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  formulario : FormGroup;

  acao: string = '';
  inscricoes: Subscription[] = [];

  linear = true;
  primeiroGrupo: FormGroup;
  segundoGrupo: FormGroup;
  terceiroGrupo: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private msg: MensagemService,
    private pessoaService: PessoaService,
    private ntf: NotificacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      dataNascimento: [null],
      data: [null],
      rua: [null],
      cep: [null],
      numero: [null],
      cidade: [null],
      estado: [null],
      telefoneFixo: [null],
      telefoneCelular: [null],
    });

    this.acao = this.activeRoute.snapshot.url[0].path;

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.pessoaService.get(dados['id']).subscribe((u) => this.atualizaCampos(u));
      }
    });

    this.inscricoes.push(s1);
  }


  voltar() {
    this.router.navigate(['cadastros', 'pessoa']);
  }

  salvar() {
    if (this.acao == 'new') {
      let s = this.pessoaService.insert(this.formulario.value).subscribe((r) => {
        this.ntf.openSnackBar(this.acao);
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    } else if (this.acao == 'edit') {
      let s = this.pessoaService.update(this.formulario.value).subscribe((r) => {
        this.ntf.openSnackBar(this.acao);
        this.voltar();
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
  }

  isValidForm(){
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
