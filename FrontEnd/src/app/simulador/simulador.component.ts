import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {

  @Input() height: number = 350;
  @Input() width: number = 650;
  @Input() categories: any[] = [
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
  ];
  @Input() dataset: any[] = [
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
  ];

  data = {
    chart: {
      caption: 'Simulação de Estratégia de Opções',
      yaxisname: 'Resultado',
      xaxisname: 'Preço da Ação',
      numdivlines: '3',
      showvalues: '0',
      legenditemfontsize: '15',
      legenditemfontbold: '1',
      plottooltext: '$seriesName em R\$$label: <b>$dataValue</b>',//'<b>$dataValue</b> Tickets $seriesName on $label',
      theme: 'fusion'
    },
    categories: this.categories,
    dataset: this.dataset
  };
  constructor() { }

  ngOnInit(): void {
  }

}
