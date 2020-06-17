using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using ScapperOpcoesAPI.ServiceLayer;

namespace ScapperOpcoesAPI.Controllers
{
    [ApiController]
    [Route("Opcoes")]
    public class OpcoesScrapperController : ControllerBase
    {

        [HttpPost]
        [Route("Get/All")]
        public async Task<JObject> GetOpcoes([FromBody] JObject body)
        {
            ScrapperOpcoesService service = new ScrapperOpcoesService("https://statusinvest.com.br/opcoes/petr4");
            JObject opcoes = await service.GetOpcoes();
            
        }
    }
}
