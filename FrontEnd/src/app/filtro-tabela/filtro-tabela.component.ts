import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';

@Component({
  selector: 'app-filtro-tabela',
  templateUrl: './filtro-tabela.component.html',
  styleUrls: ['./filtro-tabela.component.scss'],
  preserveWhitespaces: true
})
export class FiltroTabelaComponent implements OnInit {

  @Input() listaTipos: Array<string>;
  @Input() listaVencimentos: Array<string>;
  @Input() listaTickers: Array<string>;

  tipo: string = 'call';
  vencimento: string = '20/07/2020';

  options = []

  constructor(private http: HttpClient, private opcoesService: OpcoesService) { }



  ngOnInit(): void {
    this.opcoesService.obterOpcoes(this.tipo, this.vencimento).subscribe(data => this.options = data)
  }

}
