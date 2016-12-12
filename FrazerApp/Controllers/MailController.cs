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

    public class MailController : ApiController
    {

        [HttpPost]
        [ActionName("SendEmail")]
        public IHttpActionResult SendEmail(MailRequest mail)
        {
            if (mail.Message == null) return BadRequest("empty message");
            /* MailMessage represents an e-mail that can be sent using stmp server */
            MailMessage my_mail = new MailMessage();
            /* SmtpClient allows applications to send e-mails using SMTP protocol*/
            SmtpClient smtp_client = new SmtpClient();
            if (mail.To == "Fr. Mina")
            {

            }
            else if (mail.To == "Fr. Mark")
            {

            }
            else if (mail.To == "Fr. Max")
            {

            }
            else
            {
                mail.To = "stmarypopekyrillos6@gmail.com";
            }
            try
            {
                my_mail.From = new MailAddress("stmarypopekyrillos6@gmail.com", "St. Mary and St. Pope Kyrillos Coptic Orthodox Church");
                my_mail.To.Add(new MailAddress(mail.To, mail.To));
                my_mail.Subject = $"Message from {mail.Name}";
                my_mail.Body = ($@"{mail.Message}
Thanks, St. Mary and St. Pope Kyrillos Coptic Orthodox Church");

                /*Setting up STMP server credentials*/
                smtp_client.Host = "smtp.gmail.com";
                smtp_client.Port = 587;
                smtp_client.Credentials = new System.Net.NetworkCredential("stmarypopekyrillos6@gmail.com", "stmaryk2016");
                smtp_client.EnableSsl = true;
                smtp_client.Send(my_mail);
                //Console.ReadLine();
                return Ok(true);
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                Console.ReadLine();
            }
            return Ok(false);
        }



        public class MailRequest
        {
            public string To { get; set; }
            public string From { get; set; }
            public string Name { get; set; }
            public string Phone { get; set; }
            public string Message { get; set; }
        }
    }
}