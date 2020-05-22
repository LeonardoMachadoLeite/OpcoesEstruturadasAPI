using OpcoesEstruturadas.model;
using OpcoesEstruturadasAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpcoesEstruturadasAPI.ServiceLayer
{
    public class SimulacaoCarteiraService
    {

        //Output
        private Carteira carteira;

        public ICollection<double> Simular(Simulacao simulacao)
        {
            this.carteira = new Carteira();
            this.carteira.SetIntervaloPrecos(simulacao.Min, simulacao.Max, simulacao.Step);
            this.carteira.Operacoes = simulacao.Operacoes;
            return this.carteira.Simulate();
        }

    }
}
