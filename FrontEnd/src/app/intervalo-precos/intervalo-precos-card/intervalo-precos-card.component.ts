import { IntervaloPrecos } from './../../model/intervalo-precos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intervalo-precos-card',
  templateUrl: './intervalo-precos-card.component.html',
  styleUrls: ['./intervalo-precos-card.component.scss']
})
export class IntervaloPrecosCardComponent implements OnInit {

  intervalo: IntervaloPrecos = {
    Min: 10,
    Max: 30,
    Step: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
