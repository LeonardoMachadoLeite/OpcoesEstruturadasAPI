import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class BaseService {
    protected urlApi;

    private readonly apiUrl  = 'http://localhost:56972';

    constructor(protected http: HttpClient) {
        this.urlApi = this.apiUrl;
    }
}
