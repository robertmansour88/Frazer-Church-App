function SendMail(to) {

    var data = new FormData();
    data.append('To', to);
    data.append('From', document.getElementById("frombox").value);
    data.append('Phone', document.getElementById("phonebox").value);
    data.append('Name', document.getElementById("namebox").value);
    data.append('Message', document.getElementById("messagebox").value);

    debugger;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "/api/Mail/SendEmail");
    xhr.send(data);
}
