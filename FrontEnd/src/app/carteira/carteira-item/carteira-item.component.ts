import { Carteira } from './../../model/carteira';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-carteira-item',
  templateUrl: './carteira-item.component.html',
  styleUrls: ['./carteira-item.component.scss'],
  preserveWhitespaces: true
})
export class CarteiraItemComponent implements OnInit {

  @Input() carteira: Carteira;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEditar() {

  }

  onClickRemover() {

  }

}
