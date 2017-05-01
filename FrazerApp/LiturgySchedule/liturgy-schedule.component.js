"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var schedules = { Schedules: [{ Date: "3/11/2017", Time: "2:00", ServingPriest: "Abouna Max" }], LastUpdatedSchedule: "2016", Password: "StMary&PopeKyrillos2016" };
var AppComponent = (function () {
    //  constructor (private my_service: )
    function AppComponent(http) {
        this.http = http;
        this.SCHEDULES = schedules;
        this.buttonstate = 'edit';
        this.title = 'My church app';
        this.name = 'Angular';
        this.view = true;
    }
    AppComponent.prototype.ngOnInit = function () { this.getSchedule(); };
    // this method reads the JSON file we have locally 
    AppComponent.prototype.getSchedule = function () {
        var _this = this;
        //   this.getSchedule().subscribe(schedule => this.schedules = schedules);
        this.http.get('LiturgySchedule.json').subscribe(function (my_data) { return _this.SCHEDULES = my_data.json(); }, function (error) { return _this.errorMessage = error; });
        debugger;
        // try to get the data from JSON file to be populated here
        // present the data (Table) in the view (schedule-editor.html)
    };
    // this method will send a post to end point to update the file (controller), will be called onclick. 
    // the function will take the incoming data (body) from front-end to be communicated back to the controller
    AppComponent.prototype.IwantToEditLiturgySchedule = function (myModal) {
        var _this = this;
        // create a post request api/LiturgySchedule/EditLiturgySchedule , SCHEDULES
        this.http.post('http://localhost:51213/api/LiturgySchedule/EditLiturgySchedule', this.SCHEDULES).subscribe(function (Noerror) { return myModal.close(); }, function (error) { return _this.errorMessage = "Password is incorrect!"; });
        debugger;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'liturgy-schedule',
            templateUrl: 'LiturgySchedule/templates/schedule-editor.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Schedule = (function () {
    function Schedule() {
    }
    return Schedule;
}());
exports.Schedule = Schedule;
var LiturgySchedule = (function () {
    function LiturgySchedule() {
    }
    return LiturgySchedule;
}());
exports.LiturgySchedule = LiturgySchedule;
;
//# sourceMappingURL=liturgy-schedule.component.js.map