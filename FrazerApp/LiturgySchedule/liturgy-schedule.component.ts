import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
var schedules: LiturgySchedule = { Schedules: [{ Date: "3/11/2017", Time: "2:00", ServingPriest: "Abouna Max" }], LastUpdatedSchedule: "2016", Password: "StMary&PopeKyrillos2016" };


@Component({
    selector: 'liturgy-schedule',
    templateUrl: 'LiturgySchedule/templates/schedule-editor.html',
})

export class AppComponent implements OnInit {
    //title: 'Tour of Heroes';
    //heroes = ['Robert', 'Rafik', 'Amany'];
    //myHero = this.heroes[0];
    SCHEDULES = schedules;
    errorMessage: string;
    buttonstate = 'edit';
    title = 'My church app';
    name = 'Angular';
    view: boolean = true;
  //  constructor (private my_service: )
    constructor (private http:Http){}
    ngOnInit() { this.getSchedule(); }
    // this method reads the JSON file we have locally 
    getSchedule() {
        
        //   this.getSchedule().subscribe(schedule => this.schedules = schedules);
        this.http.get('LiturgySchedule.json').subscribe(
            my_data => this.SCHEDULES = my_data.json() as LiturgySchedule,
            error => this.errorMessage = <any>error
        );
        debugger;
        // try to get the data from JSON file to be populated here
        // present the data (Table) in the view (schedule-editor.html)

    }
    // this method will send a post to end point to update the file (controller), will be called onclick. 
    // the function will take the incoming data (body) from front-end to be communicated back to the controller
    IwantToEditLiturgySchedule() {
       
        if (this.view)

        {
            this.buttonstate = 'save';
            debugger;
        }
        else
        {

            this.buttonstate = 'edit';
        //     var test_schedule: memo = { Schedule: [{ Date: "33/11/2017", Time: "23:00", ServingPriest: "Abouna rrMax" }], LastUpdatedSchedule: "20316", Password: "StMary&PopeKyrillos2016" };


        // create a post request api/LiturgySchedule/EditLiturgySchedule , SCHEDULES
        this.http.post('http://localhost:51213/api/LiturgySchedule/EditLiturgySchedule', this.SCHEDULES).subscribe(
                my_error => this.errorMessage = <any>Error
           
        );
        debugger;
       

        }
        debugger;
        this.view = !this.view;
        alert("I was clicked");
    }




}

export class Schedule
{
    Date: String;
    Time: String;
    ServingPriest: String;
}

export class LiturgySchedule
{
    Password: string;
    LastUpdatedSchedule: string;
    Schedules: Schedule[];
};
