using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using ScrapperOpcoesAPI.ServiceLayer;

namespace ScrapperOpcoesAPI.Controllers
{
    [EnableCors("MyApiPolicy")]
    [ApiController]
    [Route("Scrapper")]
    public class OpcoesScrapperController : ControllerBase
    {

        [HttpPost]
        [Route("Vencimentos/Call")]
        public async Task<JArray> VencimentosCall([FromBody] JObject body)
        {
            string ticker = body.Value<string>("ticker").ToLower();
            ScrapperOpcoesService service = new ScrapperOpcoesService(String.Format("https://statusinvest.com.br/opcoes/{0}", ticker));
            return await service.GetVencimentosCall();
        }

        [HttpPost]
        [Route("Vencimentos/Put")]
        public async Task<JArray> VencimentosPut([FromBody] JObject body)
        {
            string ticker = body.Value<string>("ticker").ToLower();
            ScrapperOpcoesService service = new ScrapperOpcoesService(String.Format("https://statusinvest.com.br/opcoes/{0}", ticker));
            return await service.GetVencimentosPut();
        }

        [HttpPost]
        [Route("Opcoes")]
        public async Task<JArray> Opcoes([FromBody] JObject body)
        {
            string ticker = body.Value<string>("ticker").ToLower();
            ScrapperOpcoesService service = new ScrapperOpcoesService(String.Format("https://statusinvest.com.br/opcoes/{0}", ticker));
            JObject opcoes = await service.GetOpcoes();
            return opcoes.Value<JObject>(body.Value<string>("tipo")).Value<JArray>(body.Value<string>("vencimento"));
        }
    }
}
