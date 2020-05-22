using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{
    public class Carteira
    {

        // Input
        public IList<Operacao> Operacoes { get; set; }
        public IList<double> IntervaloPrecos { get; private set; }

        // Output
        public JArray Resultado { get; private set; }

        public Carteira()
        {
            this.Operacoes = new List<Operacao>();
            this.IntervaloPrecos = new List<double>();
            this.Resultado = new JArray();
        }

        public void SetIntervaloPrecos(double min, double max, double step)
        {
            double endfor = max + step;
            this.IntervaloPrecos = new List<double>();

            for (double i = min; i < endfor; i += step)
            {
                this.IntervaloPrecos.Add(i);
            }

        }

        public int AddOperacao(Operacao operacao)
        {
            this.Operacoes.Add(operacao);
            return this.Operacoes.Count - 1;
        }

        public int AddOperacao(TipoOperacao tipo, Acao ativo)
        {
            return this.AddOperacao(new Operacao(tipo, ativo));
        }

        public int AddAndMountOperacao(
            TipoOperacao tipo, Acao ativo, int qtd, double preco)
        {
            Operacao operacao = new Operacao(tipo, ativo);
            operacao.Montar(qtd, preco);
            return this.AddOperacao(operacao);
        }

        public JArray Simulate()
        {
            this.Resultado = new JArray();
            double custo = this.Custo();
            foreach (double preco in this.IntervaloPrecos)
            {
                //this.SpotResult(preco) - custo
                this.Resultado.Add(new JObject(
                        new JProperty("label", preco.ToString()),
                        new JProperty("value", (this.SpotResult(preco) - custo).ToString())
                    ));
            }
            return this.Resultado;
        }

        public double SpotResult(double SpotPrice)
        {
            double result = 0.0;
            foreach (Operacao op in this.Operacoes)
            {
                result += op.Resultado(SpotPrice);
            }
            return Math.Round(result, 2);
        }

        public double Custo()
        {
            double custo = 0.0;
            foreach (Operacao op in this.Operacoes)
            {
                custo += op.Custo();
            }
            return Math.Round(custo, 2);
        }

    }
}
