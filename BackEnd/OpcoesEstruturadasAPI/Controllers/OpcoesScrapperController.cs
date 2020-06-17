using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using ScrapperOpcoesAPI.ServiceLayer;

namespace ScrapperOpcoesAPI.Controllers
{
    [ApiController]
    [Route("Scrapper")]
    public class OpcoesScrapperController : ControllerBase
    {

        [HttpGet]
        [Route("Vencimentos/Call")]
        public async Task<JArray> VencimentosCall()
        {
            ScrapperOpcoesService service = new ScrapperOpcoesService("https://statusinvest.com.br/opcoes/petr4");
            return await service.GetVencimentosCall();
        }

        [HttpGet]
        [Route("Vencimentos/Put")]
        public async Task<JArray> VencimentosPut()
        {
            ScrapperOpcoesService service = new ScrapperOpcoesService("https://statusinvest.com.br/opcoes/petr4");
            return await service.GetVencimentosPut();
        }

        [HttpPost]
        [Route("Opcoes")]
        public async Task<JArray> Opcoes([FromBody] JObject body)
        {
            ScrapperOpcoesService service = new ScrapperOpcoesService("https://statusinvest.com.br/opcoes/petr4");
            JObject opcoes = await service.GetOpcoes();
            return opcoes.Value<JObject>(body.Value<string>("tipo")).Value<JArray>(body.Value<string>("vencimento"));
        }
    }
}
