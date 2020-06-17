using AngleSharp.Dom;
using AngleSharp.Html.Dom;
using AngleSharp.Html.Parser;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace ScrapperOpcoesAPI.ServiceLayer
{
    public class ScrapperOpcoesService
    {

        private string Url { get; }
        private static string[]
            CALL_SYMBOLS = { "A" , "B", "C",  "D", "E", "F", "G", "H", "I", "J", "K", "L" },
            PUT_SYMBOLS = { "M" , "N", "O",  "P", "Q", "R", "S", "T", "U", "V", "W", "X" };

        public ScrapperOpcoesService(string url)
        {
            this.Url = url;
        }

        private async Task<IHtmlDocument> GetHtmlDocument()
        {
            CancellationTokenSource cancellationToken = new CancellationTokenSource();
            HttpClient httpClient = new HttpClient();
            HttpResponseMessage request = await httpClient.GetAsync(Url);
            cancellationToken.Token.ThrowIfCancellationRequested();

            Stream response = await request.Content.ReadAsStreamAsync();
            cancellationToken.Token.ThrowIfCancellationRequested();

            HtmlParser parser = new HtmlParser();
            return parser.ParseDocument(response);
        }

        private IHtmlCollection<IElement> GetVencimentosCalls(IHtmlDocument document)
        {
            return document.GetElementsByClassName("" +
                "m-0 mb-3 align-items-center d-flex fs-3 fs-md-4 text-main-green-dark");
        }

        private IHtmlCollection<IElement> GetVencimentosPuts(IHtmlDocument document)
        {
            return document.GetElementsByClassName("" +
                "m-0 mb-3 align-items-center d-flex fs-3 fs-md-4 text-main");
        }

        private IHtmlCollection<IElement> GetOpcoes(IHtmlDocument document)
        {
            return document.GetElementsByClassName("" +
                "collection-item waves-effect waves-on-white-bg grey-text " +
                "text-darken-4 d-flex flex-wrap flex-md-nowrap justify-between " +
                "align-items-center p-relative");
        }

        private IList<string> AdaptarVencimentos(IHtmlCollection<IElement> titles)
        {
            List<string> list = new List<string>();
            foreach (IElement title in titles)
            {
                list.Add(title.TextContent.ToString().Split("\n")[2]);
            }
            return list;
        }

        private JArray AdaptarVencimentosArray(IHtmlCollection<IElement> titles)
        {
            JArray list = new JArray();
            foreach (IElement title in titles)
            {
                list.Add(title.TextContent.ToString().Split("\n")[2]);
            }
            return list;
        }

        public async Task<JArray> GetVencimentosCall()
        {
            IHtmlDocument document = await this.GetHtmlDocument();
            return AdaptarVencimentosArray(GetVencimentosCalls(document));
        }

        public async Task<JArray> GetVencimentosPut()
        {
            IHtmlDocument document = await this.GetHtmlDocument();
            return AdaptarVencimentosArray(GetVencimentosPuts(document));
        }

        public async Task<JObject> GetOpcoes()
        {
            IHtmlDocument document = await this.GetHtmlDocument();

            IHtmlCollection<IElement> titles = this.GetVencimentosCalls(document);
            IList<string> vencimentos = AdaptarVencimentos(titles);

            IHtmlCollection<IElement> collection = this.GetOpcoes(document);

            string deadline_letter_current = "0";
            int vencimentoIndex = -1;
            bool createJArray = false;

            JObject opcoes = new JObject(
                new JProperty("call", new JObject()),
                new JProperty("put", new JObject())
            );

            foreach (IElement linha in collection)
            {
                IHtmlCollection<IElement> colunas = linha.GetElementsByTagName("div");

                JObject opcao;
                List<string> valores = new List<string>();

                foreach (IElement coluna in colunas)
                {
                    valores.Add(coluna.TextContent.ToString().Split("\n")[2].TrimStart());
                }

                if (deadline_letter_current == "0" || deadline_letter_current.ElementAt(0) != valores[1][4])
                {
                    deadline_letter_current = Char.ToString(valores[1][4]);
                    vencimentoIndex++;
                    createJArray = true;
                }
                
                if (vencimentos.Count == vencimentoIndex)
                {
                    titles = this.GetVencimentosPuts(document);
                    vencimentos = AdaptarVencimentos(titles);
                    vencimentoIndex = 0;
                }

                valores.ForEach(Console.WriteLine);
                Console.WriteLine(vencimentos.Count);
                Console.WriteLine(vencimentoIndex);

                opcao = new JObject(
                    new JProperty("ESTILO", valores[0]),
                    new JProperty("SERIE", valores[1]),
                    new JProperty("VENCIMENTO", vencimentos[vencimentoIndex]),
                    new JProperty("STRIKE", valores[2]),
                    new JProperty("PREMIO", valores[3]),
                    new JProperty("COBERTO", valores[4]),
                    new JProperty("TRAVA", valores[5]),
                    new JProperty("DESCOBERTO", valores[6]),
                    new JProperty("TITULAR", valores[7]),
                    new JProperty("LANÇADOR", valores[8])
                );

                if ((CALL_SYMBOLS.Contains(deadline_letter_current)))
                {
                    if (createJArray)
                    {
                        opcoes.Value<JObject>("call").Add(vencimentos[vencimentoIndex], new JArray());
                        createJArray = false;
                    }
                    opcoes.Value<JObject>("call").Value<JArray>(vencimentos[vencimentoIndex]).Add(opcao);
                }
                else if ((PUT_SYMBOLS.Contains(deadline_letter_current)))
                {
                    if (createJArray)
                    {
                        opcoes.Value<JObject>("put").Add(vencimentos[vencimentoIndex], new JArray());
                        createJArray = false;
                    }
                    opcoes.Value<JObject>("put").Value<JArray>(vencimentos[vencimentoIndex]).Add(opcao);
                }

            }

            return opcoes;
        }

    }
}
