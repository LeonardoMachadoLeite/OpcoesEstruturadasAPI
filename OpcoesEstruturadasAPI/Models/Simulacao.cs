using OpcoesEstruturadas.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpcoesEstruturadasAPI.Models
{

    public class Simulacao
    {

        public double Min { get; set; }
        public double Max { get; set; }
        public double Step { get; set; }
        public IList<Operacao> Operacoes { get; set; }

    }
}
