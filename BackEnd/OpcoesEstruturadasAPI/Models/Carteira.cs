using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{
    public class Carteira
    {

        // Input
        public string Nome { get; private set; }
        public IList<Operacao> Operacoes { get; set; }

        public Carteira(string nome)
        {
            this.Nome = nome;
            this.Operacoes = new List<Operacao>();
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

        public JArray Simulate(IntervaloPrecos intervaloPrecos)
        {
            JArray Resultado = new JArray();
            double custo = this.Custo();
            foreach (double preco in intervaloPrecos.ListPrecos)
            {
                //this.SpotResult(preco) - custo
                Resultado.Add(new JObject(
                        new JProperty("value", (this.SpotResult(preco) - custo).ToString())
                    ));
            }
            return Resultado;
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
