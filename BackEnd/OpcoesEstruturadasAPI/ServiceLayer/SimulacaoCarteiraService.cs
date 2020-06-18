using Newtonsoft.Json.Linq;
using OpcoesEstruturadas.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpcoesEstruturadasAPI.ServiceLayer
{
    public class SimulacaoCarteiraService
    {

        public JObject SimularCarteira(JObject request)
        {

            JObject intervalo = request.Value<JObject>("intervaloPrecos");
            IntervaloPrecos intervaloPrecos = new IntervaloPrecos(
                intervalo.Value<double>("Min"),
                intervalo.Value<double>("Max"),
                intervalo.Value<double>("Step")
            );
            Carteira carteira = new Carteira(request.Value<JObject>("carteira").Value<string>("Nome"));
            foreach (JObject json in request.Value<JObject>("carteira").Value<JArray>("Operacoes"))
            {
                Operacao operacao = new Operacao(json);
                carteira.AddOperacao(operacao);
            }

            JArray Data = carteira.Simulate(intervaloPrecos);

            JObject Response = new JObject(
                new JProperty("seriesname", carteira.Nome),
                new JProperty("data", Data)
            );

            return Response;
        }

        public JArray SimularCarteiras(JObject request)
        {

            JObject intervalo = request.Value<JObject>("intervaloPrecos");
            IntervaloPrecos intervaloPrecos = new IntervaloPrecos(
                intervalo.Value<double>("Min"),
                intervalo.Value<double>("Max"),
                intervalo.Value<double>("Step")
            );

            JArray dataset = new JArray();

            JArray carteiras = request.Value<JArray>("carteiras");

            foreach (JObject obj in carteiras)
            {
                Carteira carteira = new Carteira(obj.Value<string>("Nome"));

                foreach (JObject json in obj.Value<JArray>("Operacoes"))
                {
                    Operacao operacao = new Operacao(json);
                    carteira.AddOperacao(operacao);
                }

                JArray Data = carteira.Simulate(intervaloPrecos);

                JObject Response = new JObject(
                    new JProperty("seriesname", carteira.Nome),
                    new JProperty("data", Data)
                );

                dataset.Add(Response);
            }

            return dataset;
        }

    }
}
