import { Carteira } from './../model/carteira';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { IntervaloPrecos } from './../model/intervalo-precos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
  }

  getAxisX(intervaloPrecos: IntervaloPrecos) {
    this.http.post<any>(this.urlApi + '/Simulador/IntervaloPreco', { intervaloPrecos } );
  }

  simularCarteiras(intervaloPrecos: IntervaloPrecos, carteiras: Array<Carteira>) {
    this.http.post<any>(this.urlApi + '/Simulador/IntervaloPreco', { intervaloPrecos, carteiras } );
  }

}
