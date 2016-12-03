using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Net.Mime;

namespace FrazerApp
{
    public class Email 
    {
        public static void Main(String[] args)
        {
           /* MailMessage represents an e-mail that can be sent using stmp server */
            MailMessage my_mail = new MailMessage();
            /* SmtpClient allows applications to send e-mails using SMTP protocol*/
            SmtpClient smtp_client = new SmtpClient();
            try
            {
                my_mail.From = new MailAddress("stmarypopekyrillos6@gmail.com", "Church");
                my_mail.To.Add(new MailAddress("rouby_dragdrop@hotmail.com", "Rob"));
                my_mail.Subject = "Test";
                my_mail.Body = "This is a Test Mail";

                /*Setting up STMP server credentials*/
                smtp_client.Host = "stmp.gmail.com";
                smtp_client.Port = 587;
                smtp_client.Credentials = new System.Net.NetworkCredential("stmarypopekyrillos6@gmail.com", "stmaryk2016");
                smtp_client.EnableSsl = true;
                smtp_client.Send(my_mail);
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                Console.ReadLine();
            }
        }
    }
}