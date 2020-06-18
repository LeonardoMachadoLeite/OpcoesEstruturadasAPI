import { Carteira } from './../../model/carteira';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-carteiras',
  templateUrl: './lista-carteiras.component.html',
  styleUrls: ['./lista-carteiras.component.scss']
})
export class ListaCarteirasComponent implements OnInit {

  @Input() carteiras: Array<Carteira> = [];
  @Output() GetCarteira = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removerCarteira(obj) {
    this.carteiras = this.carteiras.filter(item => item.Nome !== obj.carteira.Nome);
  }

  getCarteira(evento) {
    this.GetCarteira.emit(evento);
  }

}
