import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './announcements.component';
import { announcements_http_services } from '../Services/services.announcements';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [announcements_http_services],
})
export class AppModule { }