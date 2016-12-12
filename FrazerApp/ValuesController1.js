//link script to index.html page
//GET request endpoint at api/ValuesController1/get
//save result in a varible
////console.log the varibile 
//debugger;
////alert("Welcome to My Javascript file")
//var xhr = new XMLHttpRequest();
//xhr.open('GET', '/api/products');
//xhr.send(null);
//currentLocation = window.location.href;
//window.alert(currentLocation);
//console.log(currentLocation);



// code snippet generated from Postman for sending email controller.
//<http://localhost:51213/api/Values?name=robert&email=Some+name&phone=989&message=message>

//var data = new FormData();
//data.append("name", "Robert");

//var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

//xhr.addEventListener("readystatechange", function () {
//    if (this.readyState === 4) {
//        console.log(this.responseText);
//    }
//});

//xhr.open("POST", "http://localhost:51213/api/Values?name=robert&email=Some%20name&phone=989&message=message");
//xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "cf234763-748a-4600-8c3f-629722738464");

//xhr.send(data);

function send_email(to)
{
    debugger;
    var data = JSON.stringify({
        "NAME": document.getElementById("namebox").value,
        "Email": document.getElementById("emailbox").value,
        "phone": document.getElementById("phonebox").value,
        "message": document.getElementById("messagebox").value,
        "to": to
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:51213/api/Values");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
   // where can we place a successfull message alert("Email Sent")
}