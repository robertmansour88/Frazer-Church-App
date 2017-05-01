import { Component } from '@angular/core';

@Component({
    selector: 'pdf-view',
    template: `
    
    <h1>PDF src</h1 >
    <div>
    <label>PDF src</label >
    <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
    </div>
<div>
   <label>Page:</label>
<input type="number" placeholder="Page" [(ngModel)]="page">
</div>

<pdf-viewer [src]="pdfSrc"
            [page]="page"
            [original-size]="true"
            style="display: block;"
></pdf-viewer>
`
})

export class PdfViewComponent {
    pdfSrc: string = '/ArabicMeetingCalendar.pdf';
    page: number = 1;


}