import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PdfViewComponent } from './pdf-view.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [PdfViewerComponent, PdfViewComponent],
    bootstrap: [PdfViewComponent]
})
export class AppModule { }