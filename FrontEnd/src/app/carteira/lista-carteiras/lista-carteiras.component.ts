import { Carteira } from './../../model/carteira';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-carteiras',
  templateUrl: './lista-carteiras.component.html',
  styleUrls: ['./lista-carteiras.component.scss']
})
export class ListaCarteirasComponent implements OnInit {

  @Input() carteiras: Array<Carteira> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
