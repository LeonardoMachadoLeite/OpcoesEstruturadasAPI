using System;
using System.Collections.Generic;
using System.Text;

namespace OpcoesEstruturadas.model
{



    public class StrikeDeadline
    {

        private static readonly string[]
            CALL_SYMBOLS = new string[]
            { "A" , "B", "C",  "D", "E", "F", "G", "H", "I", "J", "K", "L" },
            PUT_SYMBOLS = new string[]
            { "M" , "N", "O",  "P", "Q", "R", "S", "T", "U", "V", "W", "X" };

        public DateTime Date { get; }
        public string CallSymbol { get; }
        public string PutSymbol { get; }

        public StrikeDeadline(DateTime date)
        {
            this.Date = date;
            this.CallSymbol = CALL_SYMBOLS[this.Date.Month - 1];
            this.PutSymbol = PUT_SYMBOLS[this.Date.Month - 1];
        }
        public StrikeDeadline(String date)
        {
            string[] aux = date.Split("/");
            if (aux[0].Length == 2 && aux[1].Length == 2 && aux[2].Length == 4)
            {
                this.Date = new DateTime(
                    Int32.Parse(aux[2]),
                    Int32.Parse(aux[1]),
                    Int32.Parse(aux[0]));
            }
            else
            {
                Console.WriteLine(date);
                throw new Exception("A data fornecida é inválida");
            }
            this.CallSymbol = CALL_SYMBOLS[this.Date.Month - 1];
            this.PutSymbol = PUT_SYMBOLS[this.Date.Month - 1];
        }

        public int GetDaysUntilDeadline()
        {
            return GetDaysUntilDeadline(DateTime.Now);
        }
        public int GetDaysUntilDeadline(DateTime startDate)
        {
            return (int)Math.Round((this.Date - startDate).TotalDays, 0);
        }

        public override string ToString()
        {
            return String.Format("StrikeDEadline(%s)", this.Date.ToString("dd/MM/YY"));
        }
    }
}
