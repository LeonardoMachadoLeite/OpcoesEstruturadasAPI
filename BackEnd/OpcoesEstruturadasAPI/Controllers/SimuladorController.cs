using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using OpcoesEstruturadasAPI.Models;
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
        public  JObject Get([FromBody] Simulacao simulacao)
        {
            return this.service.SimularCarteira(simulacao);
        }
    }
}
