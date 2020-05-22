import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {

  chart = {
    chart: {
      caption: "Average Fastball Velocity",
      yaxisname: "Velocity (in mph)",
      subcaption: "[2005-2016]",
      numbersuffix: " mph",
      rotatelabels: "1",
      setadaptiveymin: "1",
      theme: "fusion"
    },
    data: [
      {
        label: "2005",
        value: "89.45"
      },
      {
        label: "2006",
        value: "89.87"
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
