import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService {
    protected apiScrapperrUrl;
    protected apiSimuladorUrl;

    private readonly urlScrapper: ' http://localhost:53231/Opcoes/Get/All';
    private readonly urlSimuladorApi: 'http://localhost:56972/Simulador/Carteira';

    constructor(protected http: HttpClient, rota: string) {
        this.apiScrapperrUrl = this.urlScrapper;
        this.apiSimuladorUrl = this.urlSimuladorApi + rota;
    }
}