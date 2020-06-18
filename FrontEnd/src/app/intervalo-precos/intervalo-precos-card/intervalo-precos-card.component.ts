import { IntervaloPrecos } from './../../model/intervalo-precos';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intervalo-precos-card',
  templateUrl: './intervalo-precos-card.component.html',
  styleUrls: ['./intervalo-precos-card.component.scss']
})
export class IntervaloPrecosCardComponent implements OnInit {

  @Input() intervalo: IntervaloPrecos;
  @Output() simularGrafico = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  simulate(evento) {
    this.simularGrafico.emit(evento);
  }

}
