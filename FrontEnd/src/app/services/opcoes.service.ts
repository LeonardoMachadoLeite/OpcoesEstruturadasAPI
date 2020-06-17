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
          'Access-Control-Allow-Origin': '*'
        })
      };
      const body = {tipo, vencimento};
      return this.http.post<Array<OpcaoScrapper>>('/scrapper_url/Scrapper/Opcoes', body, httpOptions);
    }

}
