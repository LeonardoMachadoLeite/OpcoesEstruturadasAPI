import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs/operators';
import { BaseService } from './base.service';
import { Call } from '../model/call.model';

@Injectable({
    providedIn: 'root'
})
export class OpcoesService extends BaseService {

    constructor(http: HttpClient) {
        super(http, '/')
    }

    obterOpcoes() {
        return this.http.get<Call[]>(this.apiScrapperrUrl);
    }

}
