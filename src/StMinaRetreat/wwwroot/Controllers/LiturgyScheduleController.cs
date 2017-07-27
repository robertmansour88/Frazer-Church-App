using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace FrazerApp.Controllers
{
    [Route("api/LiturgySchedule")]
    public class LiturgyScheduleController : Controller
    {

        // this method is only used to modify the JSON file and update it. The new schedule will be coming from HTML Body
        [HttpPost("EditLiturgySchedule")]
        public IActionResult EditLiturgySchedule([FromBody]LiturgySchedule schedule)
        {

            if (schedule.Password == "StMary&PopeKyrillos2016")
            {
                schedule.Password = string.Empty;
                schedule.LastUpdatedSchedule = DateTime.Now.ToString("MMMM dd, yyyy");
                System.IO.File.WriteAllText("wwwroot/LiturgySchedule.json", JsonConvert.SerializeObject(schedule));
           //     schedule.Schedules[1].Date = "my_date";
            }
            else
            {
                return BadRequest("Password is incorrect");

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