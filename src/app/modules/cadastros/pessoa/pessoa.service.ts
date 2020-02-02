import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaConsultaResponse, Pessoa } from './pessoa.model';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

  constructor( private client: HttpClient ) { }

  /**
   * Pesquisa na tabela de pessoas
   * @param filtro Filtro para pesquisar
   * @param pageNumber Número da página
   * @param pageSize Tamanho da página
   */
  public pesquisar(filtro: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<PessoaConsultaResponse> {
    return this.client.post<PessoaConsultaResponse>('/api/pessoa/v1/pesquisar', {
      filtro: filtro,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna uma pessoa pelo id
   * @param id Id da pessoa
   */
  public get(id: number): Observable<Pessoa> {
    return this.client.get<Pessoa>('api/pessoa/v1/' + id);
  }

  /**
   * Insere uma pessoa
   * @param pessoa pessoa a ser inserida.
   */
  public insert(pessoa: Pessoa): Observable<Pessoa> {
    return this.client.post<Pessoa>('/api/pessoa/v1', pessoa);
  }

  /**
   * Atualiza um pessoa.
   * @param pesssoa pessoa a ser atualizada.
   */
  public update(pessoa: Pessoa): Observable<Pessoa> {
    return this.client.put<Pessoa>('/api/pessoa/v1', pessoa);
  }

  /**
   * Exclui um eventa.
   * @param id Id da pessoa a ser excluída.
   */
  public delete(id: number) {
    return this.client.delete('api/pessoa/v1/' + id);
  }
}
