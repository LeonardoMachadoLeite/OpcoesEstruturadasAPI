import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService {
    protected apiScrapperUrl;
    protected apiSimuladorUrl;

    private readonly urlScrapper = ' https://localhost:44343';
    private readonly urlSimuladorApi = 'https://localhost:56972';

    constructor(protected http: HttpClient) {
        this.apiScrapperUrl = this.urlScrapper;
        this.apiSimuladorUrl = this.urlSimuladorApi;
    }
}
