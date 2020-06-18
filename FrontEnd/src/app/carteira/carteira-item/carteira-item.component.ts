import { Carteira } from './../../model/carteira';
import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carteira-item',
  templateUrl: './carteira-item.component.html',
  styleUrls: ['./carteira-item.component.scss']
})
export class CarteiraItemComponent implements OnInit {

  @Input() carteira: Carteira;
  @Output() GetCarteira = new EventEmitter();
  @Output() RemoverCarteira = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickEditar() {
    this.GetCarteira.emit({ carteira: this.carteira });
  }

  onClickRemover() {
    this.RemoverCarteira.emit({ carteira: this.carteira });
  }

}
