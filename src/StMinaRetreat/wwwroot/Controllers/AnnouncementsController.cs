using System.Collections.Generic;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

namespace FrazerApp.Controllers
{
    [Route("api/Announcements")]
    public class AnnouncementsController : Controller
    {

        // POST api/<controller>
        [HttpPost("Submit_Announcement")]
        public string Submit_Announcement([FromBody]List_Of_Announcements my_announcements)
        {
            for (int i = 0; i < my_announcements.Announcements.Count; i++)
            {
                my_announcements.Announcements[i].Id = i;
            }
            System.IO.File.Delete("wwwroot/announcements.json");
            System.IO.File.WriteAllText("wwwroot/announcements.json", JsonConvert.SerializeObject(my_announcements));
            return "Okay";
        }
    }
}




public class List_Of_Announcements
{

    public List<Announcement> Announcements { get; set; }
}

public class Announcement
{
    public string Title { get; set; }
    public string Body { get; set; }
    public int Id { get; set; }

}