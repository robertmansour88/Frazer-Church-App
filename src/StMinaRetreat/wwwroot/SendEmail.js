function SendMail(to) {

    var data = JSON.stringify({
        "To": to,
        "From": document.getElementById("frombox").value,
        "Phone": document.getElementById("phonebox").value,
        "Name": document.getElementById("namebox").value,
        "Message": document.getElementById("messagebox").value
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:51213/api/Mail/SendEmail");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "37abfcfd-e922-8e07-9c27-b79b7ede274a");

    xhr.send(data);
}
