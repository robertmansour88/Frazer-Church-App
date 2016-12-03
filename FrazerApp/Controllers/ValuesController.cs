using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Services;

using System.Net.Mail;
using System.Net.Mime;

namespace FrazerApp.Controllers
{

    public class ValuesController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            return Ok(new string[] { "value1", "value2" });
        }

        public IHttpActionResult Post()
        {
            /* MailMessage represents an e-mail that can be sent using stmp server */
            MailMessage my_mail = new MailMessage();
            /* SmtpClient allows applications to send e-mails using SMTP protocol*/
            SmtpClient smtp_client = new SmtpClient();
            try
            {
                my_mail.From = new MailAddress("stmarypopekyrillos6@gmail.com", "Fraser Church Test");
                my_mail.To.Add(new MailAddress("rouby_dragdrop@hotmail.com", "Rob"));
                my_mail.Subject = "Test";
                my_mail.Body =("This is a Test email from Fraser Church Web app");

                /*Setting up STMP server credentials*/
                smtp_client.Host = "smtp.gmail.com";
                smtp_client.Port = 587;
                smtp_client.Credentials = new System.Net.NetworkCredential("stmarypopekyrillos6@gmail.com", "stmaryk2016");
                smtp_client.EnableSsl = true;
                smtp_client.Send(my_mail);
                //Console.ReadLine();
                return Ok("Hello");
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                Console.ReadLine();
            }
            return Ok("Hello");
        }



        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        //[HttpPost]
        //public IHttpActionResult Post([FromBody]string value)
        //{
        //    return Ok("Hello");
        //}

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}