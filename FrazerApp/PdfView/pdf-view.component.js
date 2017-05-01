"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PdfViewComponent = (function () {
    function PdfViewComponent() {
        this.pdfSrc = '/ArabicMeetingCalendar.pdf';
        this.page = 1;
    }
    PdfViewComponent = __decorate([
        core_1.Component({
            selector: 'pdf-view',
            template: "\n    \n    <h1>PDF src</h1 >\n    <div>\n    <label>PDF src</label >\n    <input type=\"text\" placeholder=\"PDF src\" [(ngModel)]=\"pdfSrc\">\n    </div>\n<div>\n   <label>Page:</label>\n<input type=\"number\" placeholder=\"Page\" [(ngModel)]=\"page\">\n</div>\n\n<pdf-viewer [src]=\"pdfSrc\"\n            [page]=\"page\"\n            [original-size]=\"true\"\n            style=\"display: block;\"\n></pdf-viewer>\n"
        })
    ], PdfViewComponent);
    return PdfViewComponent;
}());
exports.PdfViewComponent = PdfViewComponent;
