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
        public class email
        {
            public string NAME { get; set; }
            public string Email { get; set; }
            public string phone { get; set; }
            public string message { get; set; } 
            public string to { get; set; }
        }
        public IHttpActionResult Post([FromBody] email email)
        {
            /* MailMessage represents an e-mail that can be sent using stmp server */
            MailMessage my_mail = new MailMessage();
            /* SmtpClient allows applications to send e-mails using SMTP protocol*/
            SmtpClient smtp_client = new SmtpClient();

            var name = string.Empty;
            if (email.to == "Fr. Mina")
            {
                name = "Fr. Mina";
                email.to = "beshoyhanna@outlook.com";
            }
            else if (email.to == "Fr. Mark")
            {
                name = "Fr. Mark";
                email.to = "beshoyhanna@outlook.com";

            }
            else if (email.to == "Fr. Max")
            {
                name = "Fr. Max";
                email.to = "beshoyhanna@outlook.com";
            }
            else
            {
                email.to = "stmarypopekyrillos6@gmail.com";
            }
            try
            {
                my_mail.From = new MailAddress("stmarypopekyrillos6@gmail.com", "St. Mary & Pope Kyrillos Church Fraser");
                my_mail.To.Add(new MailAddress(email.to, name));
                my_mail.CC.Add(new MailAddress(email.Email,email.NAME));
                my_mail.Subject = $"Email from: {email.NAME}";
                my_mail.Body =(email.message);

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