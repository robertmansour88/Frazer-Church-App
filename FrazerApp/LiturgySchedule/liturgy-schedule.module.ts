import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-modal';
import { AppComponent } from './liturgy-schedule.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ModalModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
