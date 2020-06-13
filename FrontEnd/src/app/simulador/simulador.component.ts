import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {

  data = {
    chart: {
      caption: 'Simulação de Estratégia de Opções',
      yaxisname: 'Patrimonio Resultante',
      xaxisname: 'Preço da Ação',
      numdivlines: '3',
      showvalues: '1',
      legenditemfontsize: '15',
      legenditemfontbold: '1',
      plottooltext: '<b>$dataValue</b> Tickets $seriesName on $label',
      theme: 'fusion'
    },
    categories: [
      {
        category: [
          {
            label: 'Jan 1'
          },
          {
            label: 'Jan 2'
          },
          {
            label: 'Jan 3'
          },
          {
            label: 'Jan 4'
          },
          {
            label: 'Jan 5'
          },
          {
            label: 'Jan 6'
          },
          {
            label: 'Jan 7'
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: 'Carteira 1',
        data: [
          {
            value: '55'
          },
          {
            value: '45'
          },
          {
            value: '52'
          },
          {
            value: '29'
          },
          {
            value: '48'
          },
          {
            value: '28'
          },
          {
            value: '32'
          }
        ]
      },
      {
        seriesname: 'Carteira 2',
        data: [
          {
            value: '50'
          },
          {
            value: '30'
          },
          {
            value: '49'
          },
          {
            value: '22'
          },
          {
            value: '43'
          },
          {
            value: '14'
          },
          {
            value: '31'
          }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
