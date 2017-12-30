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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
var weekly_announcements = { Password: "", Announcements: [{ Title: "Title", Body: "Hello", ID: 0 }] };
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.new_announcement = {
            Title: "title", Body: "message", ID: 0
        };
        this.my_weekly_announcements = weekly_announcements;
        this.Edit_announcement = false;
        this.Current_Announcement = this.new_announcement;
    }
    ngOnInit() { this.getAnnouncements(); }
    getAnnouncements() {
        debugger;
        this.http.get('sundayschool.json').subscribe(my_data => this.my_weekly_announcements = my_data.json(), error => this.errorMessage = error);
    }
    //@Output() onEditorKeyup = new EventEmitter<any>();
    Add_announcement(Title, Body) {
        debugger;
        this.my_weekly_announcements.Announcements[this.my_weekly_announcements.Announcements.length] = { Title: Body, Body: Body, ID: 0 };
        this.my_weekly_announcements.Password = this.Password;
        this.http.post('/api/Announcements/Submit_Announcement2', this.my_weekly_announcements).subscribe(No_error => alert("success"), error => alert("Failed"));
    }
    Submit_Announcement() {
        debugger;
        this.my_weekly_announcements.Password = this.Password;
        this.http.post('/api/Announcements/Submit_Announcement2', this.my_weekly_announcements).subscribe(No_error => alert("success"), error => alert("Failed"));
    }
    editannouncement(index) {
        this.Edit_announcement = this.Edit_announcement == false ? true : false;
        this.Current_Announcement = this.my_weekly_announcements.Announcements[parseInt(index)];
    }
    ngAfterViewInit() {
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
            setup: (editor) => {
                debugger;
                this.editor = editor;
                editor.on('change', () => {
                    const content = editor.getContent();
                    this.Current_Announcement.Body = content;
                });
            },
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'sundayschool',
        templateUrl: 'SundaySchool/templates/announcements.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
;
class List_Of_Announcements {
}
exports.List_Of_Announcements = List_Of_Announcements;
class Announcement {
}
exports.Announcement = Announcement;
;
//# sourceMappingURL=announcements.component.js.map