import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';
import { OpcaoScrapper } from '../model/opcao-scrapper.model';

@Component({
  selector: 'app-tabela-opcoes',
  templateUrl: './tabela-opcoes.component.html',
  styleUrls: ['./tabela-opcoes.component.scss']
})
export class TabelaOpcoesComponent implements OnInit {

  @Input() listaTipos: Array<string>;
  @Input() listaVencimentos: Array<string>;
  @Input() listaTickers: Array<string>;

  @Input() opcoes: Array<OpcaoScrapper> = [];

  @Output() adicionarOperacao = new EventEmitter();

  constructor(private http: HttpClient, private opcoesService: OpcoesService) { }

  ngOnInit(): void {}

  onEdit(opcao: OpcaoScrapper): void {
    this.adicionarOperacao.emit({ opcao });
  }
}
