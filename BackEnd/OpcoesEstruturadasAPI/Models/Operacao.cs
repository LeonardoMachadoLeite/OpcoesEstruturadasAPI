using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{

    public enum TipoOperacao
    {
        Compra = 1,
        Venda = -1
    }

    public class Operacao
    {

        public TipoOperacao Tipo;
        public Acao Ativo { get; }
        public int Quantidade { get; set; }
        public double Preco { get; set; }

        public Operacao(JObject json)
        {
            this.Tipo = (TipoOperacao) Enum.ToObject(typeof(TipoOperacao), json.Value<int>("Tipo"));
            this.Quantidade = json.Value<int>("Quantidade");
            this.Preco = json.Value<double>("Preco");

            JObject ativo = json.Value<JObject>("Ativo");

            if (ativo.Value<int>("Opcao") == 1)
            {
                this.Ativo = new Opcao(
                    ativo.Value<string>("StockTicker"),
                    ativo.Value<string>("Ticker"),
                    new StrikeDeadline(ativo.Value<string>("Deadline")),
                    ativo.Value<double>("Strike"),
                    ativo.Value<int>("DireitoCompraVenda"),
                    ativo.Value<int>("TipoOpcao")
                );
            }
            else
            {
                this.Ativo = new Acao(ativo.Value<string>("StockTicker"));
            }
            
        }
        public Operacao(TipoOperacao tipo, Acao ativo)
        {
            this.Tipo = tipo;
            this.Ativo = ativo;
        }

        public double Montar(int qtd, double preco)
        {
            this.Quantidade = qtd;
            this.Preco = preco;
            return this.Custo();
        }

        public double Custo()
        {
            return Math.Round(this.Quantidade * this.Preco);
        }

        public double Resultado(double SpotPrice)
        {
            return Math.Round(
                this.Ativo.IntrinsicValue(SpotPrice) * 
                this.Quantidade * ((int) this.Tipo), 2);
        }

    }
}
