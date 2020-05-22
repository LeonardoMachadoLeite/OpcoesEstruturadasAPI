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
        public IList<double> Resultado { get; private set; }

        public Carteira()
        {
            this.Operacoes = new List<Operacao>();
            this.IntervaloPrecos = new List<double>();
            this.Resultado = new List<double>();
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

        public ICollection<double> Simulate()
        {
            this.Resultado = new List<double>();
            double custo = this.Custo();
            foreach (double preco in this.IntervaloPrecos)
            {
                this.Resultado.Add(this.SpotResult(preco) - custo);
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
