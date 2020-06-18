import { SimuladorService } from './services/simulador.service';
import { IntervaloPrecos } from './model/intervalo-precos';
import { Acao } from './model/acao';
import { OpcaoScrapper } from './model/opcao-scrapper.model';
import { Carteira } from './model/carteira';
import { Component, OnChanges } from '@angular/core';
import { Operacao } from './model/operacao';
import { Opcao } from './model/opcao';
import { OpcoesService } from './services/opcoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  opcao: Opcao = {
    Opcao: 1,
    StockTicker: 'PETR4',
    Ticker: 'PETRS189',
    Deadline: '20/07/2020',
    Strike: 18.99,
    DireitoCompraVenda: 1,
    TipoOpcao: 1
  };
  operacao1: Operacao = {
    Tipo: 1,
    Quantidade: 100,
    Preco: 10.0,
    Ativo: this.opcao
  };
  operacao2: Operacao = {
    Tipo: 1,
    Quantidade: -100,
    Preco: 20.0,
    Ativo: this.opcao
  };
  carteira1: Carteira = {
    Nome: 'Carteira 1',
    Operacoes: [this.operacao1]
  };
  carteira2: Carteira = {
    Nome: 'Carteira 2',
    Operacoes: [this.operacao2]
  };

  title = 'Simulador de Opções Estruturadas';
  intervalo: IntervaloPrecos = {
    Min: 10,
    Max: 30,
    Step: 1
  };
  DireitoCompraVenda: number = 0;
  StockTicker: string = 'PETR4';
  Vencimento: string = '20/07/2020';
  listaVencimentos = [];
  listaTickers = [this.StockTicker];
  listaTipos = [];
  carteiras: Array<Carteira> = [
    this.carteira1,
    this.carteira2
  ];
  operacoes: Array<Operacao> = this.carteira1.Operacoes;
  opcoesScrapper: Array<OpcaoScrapper> = [];
  chartConfig = {
    caption: 'Simulação de Estratégia de Opções',
    yaxisname: 'Resultado',
    xaxisname: 'Preço da Ação',
    numdivlines: '3',
    showvalues: '0',
    legenditemfontsize: '15',
    legenditemfontbold: '1',
    plottooltext: '$seriesName em R\$$label: <b>$dataValue</b>',//'<b>$dataValue</b> Tickets $seriesName on $label',
    theme: 'fusion'
  };
  data = {
    chart: {
      caption: 'Simulação de Estratégia de Opções',
      yaxisname: 'Resultado',
      xaxisname: 'Preço da Ação',
      numdivlines: '3',
      showvalues: '0',
      legenditemfontsize: '15',
      legenditemfontbold: '1',
      plottooltext: '$seriesName em R\$$label: <b>$dataValue</b>',
      theme: 'fusion'
    },
    categories: [
      {
        category: [
          {
            label: '10'
          },
          {
            label: '11'
          },
          {
            label: '12'
          },
          {
            label: '13'
          },
          {
            label: '14'
          },
          {
            label: '15'
          },
          {
            label: '16'
          },
          {
            label: '17'
          },
          {
            label: '18'
          },
          {
            label: '19'
          },
          {
            label: '20'
          },
          {
            label: '21'
          },
          {
            label: '22'
          },
          {
            label: '23'
          },
          {
            label: '24'
          },
          {
            label: '25'
          },
          {
            label: '26'
          },
          {
            label: '27'
          },
          {
            label: '28'
          },
          {
            label: '29'
          },
          {
            label: '30'
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: 'Carteira 01',
        data: [
          {
            value: '820'
          },
          {
            value: '720'
          },
          {
            value: '620'
          },
          {
            value: '520'
          },
          {
            value: '420'
          },
          {
            value: '320'
          },
          {
            value: '220'
          },
          {
            value: '120'
          },
          {
            value: '20'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          },
          {
            value: '-70'
          }
        ]
      },
      {
        seriesname: 'Carteira 02',
        data: [
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-180'
          },
          {
            value: '-170'
          },
          {
            value: '-70'
          },
          {
            value: '30'
          },
          {
            value: '130'
          },
          {
            value: '230'
          },
          {
            value: '330'
          },
          {
            value: '430'
          },
          {
            value: '530'
          },
          {
            value: '630'
          },
          {
            value: '730'
          },
          {
            value: '830'
          },
          {
            value: '930'
          }
        ]
      }
    ]
  };
  TiposOpcoes = ['call', 'put'];

  constructor(private opcoesService: OpcoesService, private simuladorService: SimuladorService) {
    this.opcoesService.getVencimentos().subscribe(res => this.listaVencimentos = res);
    this.opcoesService.obterOpcoes(this.TiposOpcoes[this.DireitoCompraVenda], this.Vencimento).subscribe(res => this.opcoesScrapper = res);
  }

  simular(evento) {
    console.log('simular start');
    let axisX: any;
    this.simuladorService.getAxisX(this.intervalo).subscribe(r => axisX = r);
    this.simuladorService.simularCarteiras(this.intervalo, this.carteiras).subscribe(r => this.atualizarGrafico(axisX, r));
  }

  private atualizarGrafico(axisX, axisY) {
    console.log(axisX);
    console.log(axisY);
    console.log('atualizar grafico');
    this.data = {
      chart: this.chartConfig,
      categories: axisX,
      dataset: axisY
    };
  }

  cvtString(str: string) {
    let res = str.substring(3);
    res = res.replace(',', '.');
    return Number(res);
  }

  editarCarteira(obj: any) {
    this.operacoes = obj.carteira.Operacoes;
  }

  adicionarOperacao(evento) {
    let opcao: OpcaoScrapper = evento.opcao;
    console.log(opcao);
    let ativo: Opcao = {
      Opcao: 1,
      StockTicker: this.StockTicker,
      Ticker: opcao.SERIE,
      Deadline: opcao.VENCIMENTO,
      Strike: this.cvtString(opcao.STRIKE),
      DireitoCompraVenda: this.DireitoCompraVenda,
      TipoOpcao: 0
    };
    let operacao: Operacao = {
      Tipo: 1,
      Quantidade: 0,
      Preco: this.cvtString(opcao.PREMIO),
      Ativo: ativo
    };
    this.operacoes.push(operacao);
  }

}
