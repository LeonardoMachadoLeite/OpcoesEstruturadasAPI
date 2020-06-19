import { FiltroOpcoes } from './../model/filtro-opcoes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { OpcaoScrapper } from '../model/opcao-scrapper.model';

@Injectable({
    providedIn: 'root'
})
export class OpcoesService extends BaseService {

    constructor(http: HttpClient) {
        super(http);
    }

    getVencimentos(ticker: string) {
      return this.http.post<Array<string>>(this.urlApi + '/Scrapper/Vencimentos/Call', { ticker });
    }

    obterOpcoes(body: FiltroOpcoes) {
      /*const httpOptions = {
         headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:56972'
        })
      };*/
      return this.http.post<Array<OpcaoScrapper>>(this.urlApi + '/Scrapper/Opcoes', body);;
    }

}
