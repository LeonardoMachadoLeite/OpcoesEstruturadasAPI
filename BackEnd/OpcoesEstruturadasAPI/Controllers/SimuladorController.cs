using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using OpcoesEstruturadas.model;
using OpcoesEstruturadasAPI.ServiceLayer;

namespace OpcoesEstruturadasAPI.Controllers
{
    [EnableCors("MyApiPolicy")]
    [ApiController]
    [Route("Simulador")]
    public class SimuladorController : ControllerBase
    {

        private SimulacaoCarteiraService service;

        public SimuladorController()
        {
            this.service = new SimulacaoCarteiraService();
        }

        [HttpPost]
        [Route("Carteira")]
        public  JObject SimularCarteira([FromBody] JObject request)
        {
            return this.service.SimularCarteira(request);
        }

        [HttpPost]
        [Route("Carteiras")]
        public JArray SimularCarteiras([FromBody] JObject request)
        {
            return this.service.SimularCarteiras(request);
        }

        [HttpPost]
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
