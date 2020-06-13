using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{

    public enum DireitoCompraVenda
    {
        Call = 1,
        Put = -1
    }

    public enum TipoOpcao
    {
        Americana,
        Europeia
    }

    public class Opcao : Acao
    {

        public string Ticker { get; }
        public StrikeDeadline Deadline { get; }
        public DireitoCompraVenda Operacao { get; }
        public TipoOpcao Tipo { get; }
        public double Strike { 
            get { return Math.Round(Strike, 2); } 
            private set { Strike=value; } 
        }

        public Opcao(
            string stockTicker, string ticker, StrikeDeadline deadline, double strike,
            DireitoCompraVenda operacao, TipoOpcao tipo) : base(stockTicker)
        {
            this.Ticker = ticker;
            this.Deadline = deadline;
            this.Operacao = operacao;
            this.Tipo = tipo;
            this.Strike = strike;
        }

        public override double IntrinsicValue(double SpotPrice)
        {
            if (this.Operacao == DireitoCompraVenda.Call)
            {
                if (this.Strike < SpotPrice)
                {
                    return Math.Round(SpotPrice - this.Strike, 2);
                }
                return 0.0;
            }
            else
            {
                if (this.Strike > SpotPrice)
                {
                    return Math.Round(this.Strike - SpotPrice, 2);
                }
                return 0.0;
            }
        }

        public override string ToString()
        {
            return this.Ticker;
        }

    }
}
