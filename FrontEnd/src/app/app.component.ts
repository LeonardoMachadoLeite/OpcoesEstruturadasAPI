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
    Quantidade: 100,
    Preco: 0.7,
    Ativo: {
      Opcao: 1,
      StockTicker: 'PETR4',
      Ticker: 'PETRS189',
      Deadline: '20/07/2020',
      Strike: 18.9,
      DireitoCompraVenda: -1,
      TipoOpcao: 1
    }
  };
  operacao2: Operacao = {
    Quantidade: -100,
    Preco: 0.7,
    Ativo: {
      Opcao: 1,
      StockTicker: 'PETR4',
      Ticker: 'PETRS189',
      Deadline: '20/07/2020',
      Strike: 18.9,
      DireitoCompraVenda: -1,
      TipoOpcao: 1
    }
  };
  carteira1: Carteira = {
    Nome: 'Carteira 1',
    Operacoes: [this.operacao1],
    Custo: -70
  };
  carteira2: Carteira = {
    Nome: 'Carteira 2',
    Operacoes: [this.operacao2],
    Custo: 70
  };

  title = 'Simulador de Opções Estruturadas';
  intervalo: IntervaloPrecos = {
    Min: 17,
    Max: 22,
    Step: 1
  };

  StockTicker = 'PETR4';
  Vencimento = '20/07/2020';

  listaVencimentos = [];
  listaTickers = ['PETR4', 'ITUB4', 'CSNA3'];
  TiposOpcoes = ['call', 'put'];

  carteiras: Array<Carteira> = [
    this.carteira1,
    this.carteira2
  ];
  carteiraAtiva: Carteira = this.carteiras[0];
  chartConfig = {
    caption: 'Simulação de Estratégia de Opções',
    yaxisname: 'Resultado',
    xaxisname: 'Preço da Ação',
    numdivlines: '3',
    showvalues: '0',
    legenditemfontsize: '15',
    legenditemfontbold: '1',
    plottooltext: '$seriesName em R\$$label: <b>$dataValue</b>',
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
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: 'Carteira 01',
        data: [
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
          }
        ]
      },
      {
        seriesname: 'Carteira 02',
        data: [
          {
            value: '-120'
          },
          {
            value: '-20'
          },
          {
            value: '70'
          },
          {
            value: '70'
          },
          {
            value: '70'
          },
          {
            value: '70'
          }
        ]
      }
    ]
  };

  constructor(private opcoesService: OpcoesService, private simuladorService: SimuladorService) {}

  async simular(evento) {
    console.log('simular start');
    this.simuladorService.getAxisX(this.intervalo).subscribe(x =>
      this.simuladorService.simularCarteiras(this.intervalo, this.carteiras)
      .subscribe(y => this.atualizarGrafico(x, y)));
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

  editarCarteira(obj: any) {
    this.carteiraAtiva = obj.carteira;
  }

  setOperacoes(obj: any) {
    this.carteiraAtiva.Operacoes = obj.Operacoes;
  }

  adicionarOperacao(evento) {
    this.carteiraAtiva.Operacoes.push(evento.operacao);
  }

  setIntervalo(evento) {
    this.intervalo = evento.intervalo;
  }

}
