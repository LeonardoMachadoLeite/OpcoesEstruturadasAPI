import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {

  @Input() height: number = 300;
  @Input() width: number = 900;

  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
