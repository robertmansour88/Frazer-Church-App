import { Component, OnChanges, SimpleChanges } from '@angular/core';

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
<input type="number" placeholder="Page" [(ngModel)]="current_page">
</div>
<div style="width:100%">
<pdf-viewer [src]="pdfSrc"
            [(page)]="current_page"
            [original-size]="false"
[zoom]="1"
            style="display: block;"></pdf-viewer>
</div>

<iframe src="https://drive.google.com/file/d/0B4tKknOQn4Czc3RhcnRlcl9maWxl/preview" width="640" height="480"></iframe>
`
})

export class PdfViewComponent {
    pdfSrc: string = '/Health_Assessment.pdf';
    current_page: number = 1;


}