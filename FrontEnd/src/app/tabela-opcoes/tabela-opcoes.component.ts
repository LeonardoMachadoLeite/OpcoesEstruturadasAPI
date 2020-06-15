import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';
import { Call } from '../model/call.model';

@Component({
  selector: 'app-tabela-opcoes',
  templateUrl: './tabela-opcoes.component.html',
  styleUrls: ['./tabela-opcoes.component.scss']
})
export class TabelaOpcoesComponent implements OnInit {

  constructor(private http: HttpClient, private opcoesService: OpcoesService) { }

  ngOnInit(): void {  

    
  }
  opcoes = this.opcoesService.obterOpcoes();
}
