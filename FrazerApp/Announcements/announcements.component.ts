import {
    Component, OnInit
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { announcements_http_services } from '../Services/services.announcements';

declare var tinymce: any;
var weekly_announcement: Announcement = { Title: "Title", Body: "Hello" };   



/* add tinymce: https://www.tinymce.com/  */

@Component({
    selector: 'my-announcement', 
    templateUrl: 'Announcements/templates/announcements.html',
})

export class AppComponent implements OnInit {

    
    debugger;
    //constructor (private my_service: )
    
    constructor(private my_service: announcements_http_services) { }
    ngOnInit() { alert(this.my_service.post_data()) }
    //@Output() onEditorKeyup = new EventEmitter<any>();
    my_weekly_announcement = weekly_announcement;
    editor: any;
    document: any;
    Submit_Announcement()
    {
        debugger;
        
        //Http.post('/api/Announcements/Submit_Announcement', this.my_weekly_announcement).subscribe(
        //    No_error => alert("success"),
        //    error => alert("Failed")
        //    );

    
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
            images_upload_handler: function (blob: any, success: any, failure: any) {
                tinymce.activeEditor.execCommand("mceInsertContent", false, "<img src='" + blob + "'");
            },
            file_picker_callback: function (cb: any, value: any, meta: any) {
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
            setup: (editor: any) => {
                debugger;
                this.editor = editor;
                editor.on('change', () => {
                    this.my_weekly_announcement.Body = editor.getContent();
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
};

export class Announcement {
    Title: string;
    Body: string;

};