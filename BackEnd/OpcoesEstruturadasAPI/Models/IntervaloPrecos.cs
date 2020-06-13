using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{
    public class IntervaloPrecos {

        public double Min { get; private set; }
        public double Max { get; private set; }
        public double Step { get; private set; }
        public IList<double> ListPrecos { get; private set; }

        public IntervaloPrecos(double min, double max, double step)
        {

            this.Min = min;
            this.Max = max;
            this.Step = step;

            double endfor = max + step;
            this.ListPrecos = new List<double>();

            for (double i = min; i < endfor; i += step)
            {
                this.ListPrecos.Add(i);
            }

        }

        public JArray GetxAxis() {
            JArray category = new JArray();

            foreach (double preco in this.ListPrecos) {
                category.Add(new JObject(new JProperty("label", preco)));
            }
            
            JArray categories = new JArray();
            categories.Add(new JObject(new JProperty("category", category)));
            return categories;
        }

    }

}