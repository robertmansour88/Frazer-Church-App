import {
    Component, OnInit
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import { FormsModule } from '@angular/forms';

declare var tinymce: any;
var weekly_announcements: List_Of_Announcements = { Announcements: [{ Title: "Title", Body: "Hello", ID: 0 }] };   



/* add tinymce: https://www.tinymce.com/  */

@Component({
    selector: 'announcements', 
    templateUrl: 'Announcements/templates/announcements.html',
})

export class AppComponent implements OnInit {
    new_announcement: Announcement =
    {
        Title: "my_title", Body: "my_body", ID: 0
    }
    my_weekly_announcements = weekly_announcements;
    errorMessage: string;
    editor: any;
    document: any;
    Edit_announcement = false;
    Current_Announcement: Announcement = this.my_weekly_announcements.Announcements[0];
    constructor(private http: Http) { }
    ngOnInit() { this.getAnnouncements();}

    
    // this method reads the JSON file we have locally 
    getAnnouncements() {
        debugger;
        //   this.getSchedule().subscribe(schedule => this.schedules = schedules);
        this.http.get('announcements.json').subscribe(
            my_data => this.my_weekly_announcements = my_data.json() as List_Of_Announcements,
            error => this.errorMessage = <any>error
        );
    }
    //@Output() onEditorKeyup = new EventEmitter<any>();


    Add_announcement(Title: string, Body: string )
    {
        debugger;
        this.my_weekly_announcements.Announcements[this.my_weekly_announcements.Announcements.length] = { Title: Body, Body: Body ,ID: 0 }
        this.http.post('/api/Announcements/Submit_Announcement', this.my_weekly_announcements).subscribe(
            No_error => alert("success"),
            error => alert("Failed")
        );

    }
    Submit_Announcement()
    {
        debugger;
        
        this.http.post('/api/Announcements/Submit_Announcement', this.my_weekly_announcements).subscribe(
            No_error => alert("success"),
            error => alert("Failed")
            );

    
    }

    editannouncement(index:string)
    {
        this.Edit_announcement = this.Edit_announcement == false ? true : false
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
export class List_Of_Announcements {

    Announcements: Announcement[];

}
export class Announcement {
    ID: number;
    Title: string;
    Body: string;

};