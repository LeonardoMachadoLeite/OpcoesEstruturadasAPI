using Newtonsoft.Json.Linq;
using OpcoesEstruturadas.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpcoesEstruturadasAPI.Models
{

    public class Simulacao
    {

        public IntervaloPrecos intervaloPrecos { get; set; }
        public Carteira carteira { get; set; }

    }
}
