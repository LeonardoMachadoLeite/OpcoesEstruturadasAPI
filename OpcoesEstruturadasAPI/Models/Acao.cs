using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{
    public class Acao
    {

        public string AcaoTicker { get; }

        public Acao(string acaoTicker)
        {
            this.AcaoTicker = acaoTicker;
        }

        public virtual double IntrinsicValue(double SpotPrice)
        {
            return Math.Round(SpotPrice, 2);
        }

    }
}
