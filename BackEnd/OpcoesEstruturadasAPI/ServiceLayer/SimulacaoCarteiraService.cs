using Newtonsoft.Json.Linq;
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

        public JObject Simular(Simulacao simulacao)
        {
            this.carteira = new Carteira();
            this.carteira.SetIntervaloPrecos(simulacao.Min, simulacao.Max, simulacao.Step);
            this.carteira.Operacoes = simulacao.Operacoes;
            JArray Data = this.carteira.Simulate();

            JObject Response = new JObject(
                new JProperty("chart", simulacao.ChartConfig),
                new JProperty("data", Data)
            );

            return Response;
        }

    }
}
