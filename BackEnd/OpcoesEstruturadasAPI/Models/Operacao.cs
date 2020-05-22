using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{

    public enum TipoOperacao
    {
        Compra = 1,
        Venda = -1
    }

    public class Operacao
    {

        public TipoOperacao Tipo;
        public Acao Ativo { get; }
        public int Quantidade { get; set; }
        public double Preco { get; set; }

        public Operacao(TipoOperacao tipo, Acao ativo)
        {
            this.Tipo = tipo;
            this.Ativo = ativo;
        }

        public double Montar(int qtd, double preco)
        {
            this.Quantidade = qtd;
            this.Preco = Preco;
            return this.Custo();
        }

        public double Custo()
        {
            return Math.Round(this.Quantidade * this.Preco);
        }

        public double Resultado(double SpotPrice)
        {
            return Math.Round(
                this.Ativo.IntrinsicValue(SpotPrice) * 
                this.Quantidade * ((int) this.Tipo), 2);
        }

    }
}
