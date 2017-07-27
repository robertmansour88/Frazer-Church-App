using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using Microsoft.AspNetCore.Mvc;

namespace FrazerApp.Controllers
{
    [Route("api/Mail")]
    public class MailController : Controller
    {

        [HttpPost("SendEmail")]
        public string SendEmail(MailRequest mail)
        {
            if (mail.Message == null) return "empty message";
            /* MailMessage represents an e-mail that can be sent using stmp server */
            MimeMessage my_mail = new MimeMessage();
            /* SmtpClient allows applications to send e-mails using SMTP protocol*/
            SmtpClient smtp_client = new SmtpClient();

            var Email = new MailRequest();

            var name = string.Empty;
            if (mail.To == "Fr. Mina")
            {
                name = "Fr. Mina";
                Email.To = "abounamina@gmail.com";
            }
            else if (mail.To == "Fr. Mark")
            {
                name = "Fr. Mark";
                Email.To = "frmarkibrahim@gmail.com";

            }
            else if (mail.To == "Fr. Max")
            {
                name = "Fr. Max";
                Email.To = "Fr.maximus@gmail.com";
            }
            else
            {
                mail.To = "stmarypopekyrillos6@gmail.com";
            }

            try
            {
                my_mail.From.Add(new MailboxAddress("St. Mary and St. Pope Kyrillos Coptic Orthodox Church", "stmarypopekyrillos6@gmail.com"));
                my_mail.To.Add(new MailboxAddress(name, Email.To));
                my_mail.Subject = $"Message from {mail.Name}";
                my_mail.Body = new TextPart ($@"{mail.Message}
Thanks, St. Mary and St. Pope Kyrillos Coptic Orthodox Church");
                my_mail.Cc.Add(new MailboxAddress(mail.Name,mail.From));
                /*Setting up STMP server credentials*/
                smtp_client.Connect("smtp.gmail.com", 587);
                smtp_client.Authenticate(new System.Net.NetworkCredential("stmarypopekyrillos6@gmail.com", "stmaryk2016"));
                smtp_client.Send(my_mail);
                //Console.ReadLine();
                return "Ok";
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                Console.ReadLine();
            }
            return "Error";

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
