import { Acao } from './acao';

export class Opcao extends Acao {

  Ticker: string;
  Deadline: string;
  Strike: number;
  DireitoCompraVenda: number;
  TipoOpcao: number;

}
