using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RestSharp;

namespace StMinaRetreatTest
{
    [TestClass]
    public class ArticlesTest
    {
        [TestMethod]
        public void GetNewslettersDirectory()
        {
            var client = new RestClient("http://localhost:50875/api/Newsletters/2007%20-%20Volume%201/1%20-%20SMRC%20Newsletter%20-%20Jan-Mar%2007.pdf");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            Assert.IsNotNull(response);
        }
    }
}
