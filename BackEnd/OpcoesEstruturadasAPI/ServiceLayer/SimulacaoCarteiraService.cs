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

        public JObject SimularCarteira(Simulacao simulacao)
        {

            JArray Data = simulacao.carteira.Simulate(simulacao.intervaloPrecos);

            JObject Response = new JObject(
                new JProperty("seriesname", simulacao.carteira.Nome),
                new JProperty("data", Data)
            );

            return Response;
        }

    }
}
