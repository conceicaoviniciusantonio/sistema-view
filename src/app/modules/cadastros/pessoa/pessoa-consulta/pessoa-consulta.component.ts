import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { PessoaConsultaResponse, Pessoa } from '../pessoa.model';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.css']
})
export class PessoaConsultaComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private pessoaService: PessoaService) { }

  filtro: string = '';

  public displayedColumns: string[] = ['id', 'nome', 'dataNascimento','cidade', 'buttons'];

  dados: PessoaConsultaResponse = { lista: [], total: 0, paginas: 0 };

  isLoadingResults = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  ngOnInit() {
    this.paginator.pageSize = 8;
    this.paginator.pageIndex = 0;

    this.sort.active = "nome";
    this.sort.direction = "asc";

    this.paginator.page.subscribe(() => this.atualizar());
    this.sort.sortChange.subscribe(() => this.pesquisar());

    this.pesquisar();
  }

  pesquisar() {
    this.paginator.pageIndex = 0;

    this.atualizar();
  }

  atualizar() {
    this.isLoadingResults = true;

    this.pessoaService
      .pesquisar(this.filtro, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
      .subscribe((result) => {
        this.isLoadingResults = false;
        this.dados = result;
      }, (error) => {
        console.error(error);
        this.isLoadingResults = false;
      });
  }

  novo() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  editar(p: Pessoa) {
    this.router.navigate(['edit', p.id], { relativeTo: this.activeRoute });
  }

  excluir(p: Pessoa) {
    this.router.navigate(['delete', p.id], { relativeTo: this.activeRoute });
  }

  visualizar(p: Pessoa) {
    this.router.navigate(['view', p.id], { relativeTo: this.activeRoute });
  }

}
