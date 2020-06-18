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

    obterOpcoes(tipo: string, vencimento: string) {
      const httpOptions = {
         headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:56972'
        })
      };
      const body = {tipo, vencimento};
      const request = this.http.post<Array<OpcaoScrapper>>(this.urlApi + '/Scrapper/Opcoes', body, httpOptions);
      return request;
    }

}
