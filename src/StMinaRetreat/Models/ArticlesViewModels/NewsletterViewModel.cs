using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StMinaRetreat.Models.ArticlesViewModels
{
    public class NewsletterViewModel
    {
        DateTime Quarter { get; set; }
        byte[] PDF { get; set; }

        public string GetQuarter()
        {
            var q = string.Empty;
            if (Quarter.Month == 1 || Quarter.Month == 2 || Quarter.Month == 3)
            {
                q = "Q1";
            }
            else if (Quarter.Month == 4 || Quarter.Month == 5 || Quarter.Month == 6)
            {
                q = "Q2";
            }
            else if (Quarter.Month == 7 || Quarter.Month == 8 || Quarter.Month == 9)
            {
                q = "Q3";
            }
            else
            {
                q = "Q4";
            }

            return $"{q} {Quarter.Year.ToString()}";
        }
    }
}
