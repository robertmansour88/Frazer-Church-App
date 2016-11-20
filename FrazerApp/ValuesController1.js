//link script to index.html page
//GET request endpoint at api/ValuesController1/get
//save result in a varible
//console.log the varibile 
debugger;
//alert("Welcome to My Javascript file")
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/products');
xhr.send(null);
//currentLocation = window.location.href;
//window.alert(currentLocation);
//console.log(currentLocation);