using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json;

namespace FrazerApp.Controllers
{
    public class AnnouncementsController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        [ActionName ("Submit_Announcement")]
        public IHttpActionResult Submit_Announcement ([FromBody]List_Of_Announcements my_announcements)
        {
            for (int i =0; i< my_announcements.Announcements.Count; i++)
            {
                my_announcements.Announcements[i].ID = i;
            }

            string path = System.Web.HttpContext.Current.Server.MapPath("/");
            System.IO.File.WriteAllText(path + "\\Announcements.json", JsonConvert.SerializeObject(my_announcements));
            return Ok();
        }

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




public class List_Of_Announcements
{

    public List<Announcement> Announcements {get; set; }
}

public class Announcement
{
    public string Title { get; set; }
    public string Body { get; set; }
    public int ID { get; set;}

}