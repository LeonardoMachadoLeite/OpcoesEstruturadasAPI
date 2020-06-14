using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using OpcoesEstruturadas.model;
using OpcoesEstruturadasAPI.ServiceLayer;

namespace OpcoesEstruturadasAPI.Controllers
{
    [ApiController]
    [Route("Simulador")]
    public class SimuladorController : ControllerBase
    {

        private SimulacaoCarteiraService service;

        public SimuladorController()
        {
            this.service = new SimulacaoCarteiraService();
        }

        [HttpGet]
        [Route("Carteira")]
        public  JObject GetCarteira([FromBody] JObject request)
        {
            return this.service.SimularCarteira(request);
        }

        [HttpGet]
        [Route("Carteiras")]
        public JArray GetCarteiras([FromBody] JArray request)
        {
            JArray simulacoes = new JArray();
            foreach (JObject carteira in request)
            {
                simulacoes.Add(this.service.SimularCarteira(carteira));
            }
            return simulacoes;
        }

        [HttpGet]
        [Route("IntervaloPreco")]
        public  JArray GetIntervaloPreco([FromBody] JObject request)
        {
            JObject intervalo = request.Value<JObject>("intervaloPrecos");
            IntervaloPrecos intervaloPrecos = new IntervaloPrecos(
                intervalo.Value<double>("Min"),
                intervalo.Value<double>("Max"),
                intervalo.Value<double>("Step")
            );
            return intervaloPrecos.GetxAxis();
        }

    }
}
