using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OpcoesEstruturadasAPI.Models;
using OpcoesEstruturadasAPI.ServiceLayer;

namespace OpcoesEstruturadasAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SimuladorController : ControllerBase
    {

        private SimulacaoCarteiraService service;

        public SimuladorController()
        {
            this.service = new SimulacaoCarteiraService();
        }

        [HttpGet]
        public ICollection<double> Get([FromBody] Simulacao simulacao)
        {
            return this.service.Simular(simulacao);
        }
    }
}
