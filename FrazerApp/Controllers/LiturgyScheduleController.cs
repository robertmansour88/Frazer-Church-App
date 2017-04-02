using FrazerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Newtonsoft.Json;
using System.IO;


namespace FrazerApp.Controllers
{
    public class LiturgyScheduleController : ApiController
    {
 
        // this method is only used to modify the JSON file and update it. The new schedule will be coming from HTML Body
       [HttpPost]
       [ActionName ("EditLiturgySchedule")]
        public IHttpActionResult EditLiturgySchedule([FromBody]LiturgySchedule schedule)
        {

            if (schedule.Password == "StMary&PopeKyrillos2016")
            {
                schedule.Password = string.Empty;
                string path = System.Web.HttpContext.Current.Server.MapPath("/") ;
                System.IO.File.WriteAllText(path + "\\LiturgySchedule.json", JsonConvert.SerializeObject(schedule));
           //     schedule.Schedules[1].Date = "my_date";
            }
            return Ok();

        }
    }
}

public class LiturgySchedule
{
    public string Password { get; set; }
    public string LastUpdatedSchedule { get; set; }
    public List<Schedule> Schedule {get; set;}
   // public Schedule schedules;

}

public class Schedule
{
    public string Date { get; set; }
    public string Time { get; set; }
    public string ServingPriest { get; set; }
}



//export class schedule
//{
//    Date: String;
//    Time: String;
//    ServingPriest: String;
//}

//export class memo
//{
//    Password: string;
//    LastUpdatedSchedule: string;
//    Schedule: schedule[];
//};