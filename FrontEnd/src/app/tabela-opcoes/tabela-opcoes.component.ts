import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';
import { OpcaoScrapper } from '../model/opcao-scrapper.model';

@Component({
  selector: 'app-tabela-opcoes',
  templateUrl: './tabela-opcoes.component.html',
  styleUrls: ['./tabela-opcoes.component.scss']
})
export class TabelaOpcoesComponent implements OnInit {

  tipo: string = 'call';
  vencimento: string = '20/07/2020';

  vencimentos: Array<string> = [];
  opcoes: Array<OpcaoScrapper> = [];

  constructor(private http: HttpClient, private opcoesService: OpcoesService) { }

  ngOnInit(): void {
    //this.opcoesService.obterOpcoes(this.tipo, this.vencimento).subscribe(res => this.opcoes = res);
  }

  onEdit(opcao: OpcaoScrapper): void {

  }
}
