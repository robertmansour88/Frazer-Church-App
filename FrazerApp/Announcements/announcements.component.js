"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var weekly_announcement = { Title: "Title", Body: "Hello" };
/* add tinymce: https://www.tinymce.com/  */
var AppComponent = (function () {
    //constructor (private my_service: )
    function AppComponent(my_service) {
        this.my_service = my_service;
        //@Output() onEditorKeyup = new EventEmitter<any>();
        this.my_weekly_announcement = weekly_announcement;
    }
    AppComponent.prototype.ngOnInit = function () { alert(this.my_service.post_data()); };
    AppComponent.prototype.Submit_Announcement = function () {
        debugger;
        //Http.post('/api/Announcements/Submit_Announcement', this.my_weekly_announcement).subscribe(
        //    No_error => alert("success"),
        //    error => alert("Failed")
        //    );
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: 'textarea',
            toolbar: 'undo redo | link image media',
            file_picker_types: 'image',
            paste_data_images: true,
            relative_urls: false,
            convert_urls: false,
            remove_script_host: false,
            images_upload_handler: function (blob, success, failure) {
                tinymce.activeEditor.execCommand("mceInsertContent", false, "<img src='" + blob + "'");
            },
            file_picker_callback: function (cb, value, meta) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
                input.onchange = function () {
                    var file = input.files[0];
                    if (file) {
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function (e) {
                            cb(reader.result);
                        };
                    }
                };
                input.click();
            },
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor imagetools"
            ],
            setup: function (editor) {
                debugger;
                _this.editor = editor;
                editor.on('change', function () {
                    _this.my_weekly_announcement.Body = editor.getContent();
                });
            },
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-announcement',
            templateUrl: 'Announcements/templates/announcements.html',
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
var Announcement = (function () {
    function Announcement() {
    }
    return Announcement;
}());
exports.Announcement = Announcement;
;
