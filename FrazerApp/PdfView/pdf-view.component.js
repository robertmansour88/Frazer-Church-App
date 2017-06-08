var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var PdfViewComponent = (function () {
    function PdfViewComponent() {
        this.pdfSrc = '/Health_Assessment.pdf';
        this.current_page = 1;
    }
    return PdfViewComponent;
}());
PdfViewComponent = __decorate([
    Component({
        selector: 'pdf-view',
        template: "\n    \n    <h1>PDF src</h1 >\n    <div>\n    <label>PDF src</label >\n    <input type=\"text\" placeholder=\"PDF src\" [(ngModel)]=\"pdfSrc\">\n    </div>\n<div>\n   <label>Page:</label>\n<input type=\"number\" placeholder=\"Page\" [(ngModel)]=\"current_page\">\n</div>\n<div style=\"width:100%\">\n<pdf-viewer [src]=\"pdfSrc\"\n            [(page)]=\"current_page\"\n            [original-size]=\"false\"\n[zoom]=\"1\"\n            style=\"display: block;\"></pdf-viewer>\n</div>\n\n<iframe src=\"https://drive.google.com/file/d/0B4tKknOQn4Czc3RhcnRlcl9maWxl/preview\" width=\"640\" height=\"480\"></iframe>\n"
    })
], PdfViewComponent);
export { PdfViewComponent };
